var title = document.getElementById("myFileName");
var btn = document.getElementById("runAs");
btn.style.display = "none"
matches = [".0XE",".73K",".89K",".8CK",".A6P",".A7R",".AC",".ACC",".ACR",".ACTC",".ACTION",".ACTM",".AHK",".AIR",".APK",".APP",".APP",".APP",".APPLESCRIPT",".ARSCRIPT",".ASB",".AZW2",".BA_",".BAT",".BEAM",".BIN",".BIN",".BTM",".CACTION",".CEL",".CELX",".CGI",".CMD",".COF",".COFFEE",".COM",".COMMAND",".CSH",".CYW",".DEK",".DLD",".DMC",".DS",".DXL",".E_E",".EAR",".EBM",".EBS",".EBS2",".ECF",".EHAM",".ELF",".EPK",".ES",".ESH",".EX4",".EX5",".EX_",".EX_",".EXE",".EXE",".EXE1",".EXOPC",".EZS",".EZT",".FAS",".FAS",".FKY",".FPI",".FRS",".FXP",".GADGET",".GPE",".GPU",".GS",".HAM",".HMS",".HPF",".HTA",".ICD",".IIM",".IPA",".IPF",".ISU",".ITA",".JAR",".JS",".JSE",".JSF",".JSX",".KIX",".KSH",".KX",".LO",".LS",".M3G",".MAC",".MAM",".MCR",".MCR",".MEL",".MEM",".MIO",".MLX",".MM",".MPX",".MRC",".MRP",".MS",".MS",".MSL",".MXE",".N",".NCL",".NEXE",".ORE",".OSX",".OTM",".OUT",".PAF",".PAF.EXE",".PEX",".PHAR",".PIF",".PLSC",".PLX",".PRC",".PRG",".PRG",".PS1",".PVD",".PWC",".PYC",".PYO",".QIT",".QPX",".RBF",".RBX",".RFU",".RGS",".ROX",".RPJ",".RUN",".RXE",".S2A",".SBS",".SCA",".SCAR",".SCB",".SCPT",".SCPTD",".SCR",".SCRIPT",".SCT",".SEED",".SERVER",".SHB",".SMM",".SPR",".TCP",".THM",".TIAPP",".TMS",".U3P",".UDF",".UPX",".VBE",".VBS",".VBSCRIPT",".VDO",".VEXE",".VLX",".VPM",".VXP",".WCM",".WIDGET",".WIDGET",".WIZ",".WORKFLOW",".WPK",".WPM",".WS",".WSF",".WSH",".X86",".XAP",".XBAP",".XLM",".XQT",".XYS",".ZL9",".SH"]
function RunAs(){
	
	if (new RegExp(matches.join("|").toLowerCase()).test(title.value.toLowerCase())) {
		btn.style.display = "block"
		
	} 
	else {
		btn.style.display = "none"
	}
}