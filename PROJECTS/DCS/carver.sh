#!/bin/bash
read -p "Partition Name: " file; read -p "Cluster Size: " cluster;
read -p "Start Signature: " begin; read -p "End Signature: " end;
results=`xxd $file | egrep "$begin|$end" > matches.txt`
rm -f results.txt
for i in $(seq 1 $(wc -l < "matches.txt")); do
	line=`sed "${i}q;d" matches.txt`
	hex=`sed "${i}q;d" matches.txt | cut -d: -f1`
	at=$(( $((0x$hex)) / $cluster ))
	echo "$at > $line" >> results.txt
done; cat results.txt; rm -f matches.txt; rm -f results.txt
read -p "Start and End: " lines; read -p "Extension: " ext
A=`echo $lines | cut -d' ' -f1`; B=`echo $lines | cut -d' ' -f2`
count=$(( $B - $A + 1 )); fname="$A.$ext"
dd if=$file of=$fname bs=$cluster count=$count skip=$A &> /dev/null
echo "File > $fname"
md5=`md5sum $fname | cut -d' ' -f1 | tail -c5`; echo "Hash > $md5"
