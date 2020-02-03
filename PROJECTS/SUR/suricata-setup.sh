#!/bin/bash
apt="oisf/suricata-stable"
rep=$(find /etc/apt -name *.list | xargs cat | grep -q "^deb.*$rep")
for a in "$@"; do
case $a in
i)
if ! $rep; then
echo 'Adding Repository'
sudo add-apt-repository ppa:$apt
fi
echo 'Updating'
sudo apt-get -qq update
sudo apt-get -qq upgrade
echo 'Installing suricata'
if ! type suricata &>/dev/null; then
sudo apt-get install suricata
sudo apt autoremove
fi
echo 'Installing oinkmaster'
if ! type oinkmaster &>/dev/null; then
sudo apt-get install oinkmaster
sudo apt autoremove
fi
;;
u)
echo 'Removing suricata repository'
if $rep; then
sudo add-apt-repository --remove ppa:$apt
fi
echo 'Uninstalling suricata'
if type suricata &>/dev/null; then
sudo apt-get purge --auto-remove suricata
fi
echo 'Uninstalling oinkmaster'
if type oinkmaster &>/dev/null; then
sudo apt-get purge --auto-remove oinkmaster
fi
;;
*) echo "Usage: $0 {i|u}"; exit;;
esac; done
