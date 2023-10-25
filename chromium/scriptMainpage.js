window.onload = function MainPage()
    {
        if (window.location.href == "https://www.technopat.net/sosyal/")
        {
            // Ana Sayfa (WinNormal + MacSmall + LinuxSmall)

            // -----------------------------------------------------------------------

            // Windows 11

            const Win11P = document.getElementsByClassName('node--id314')[0];
            if (typeof Win11P !== 'undefined') {
                console.log("Technopat'tan herkese merhabalar!");
            }
            const Win11P2 = Win11P.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldWin11 = Win11P2.getElementsByClassName('fa fab fa-windows')[0];

            const newWin11 = document.createElement('img');
            newWin11.id = 'win11icon';
            newWin11.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/windows/win11-new.png';
            newWin11.width = "34";
            newWin11.height = "34";

            Win11P2.removeChild(oldWin11);
            Win11P2.appendChild(newWin11);

            // -----------------------------------------------------------------------

            // Windows 10

            const Win10P = document.getElementsByClassName('node--id113')[0];
            const Win10P2 = Win10P.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldWin10 = Win10P2.getElementsByClassName('fa fab fa-windows')[0];

            const newWin10 = document.createElement('img');
            newWin10.id = 'win10icon';
            newWin10.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/windows/win10.png';
            newWin10.width = "34";
            newWin10.height = "34";

            Win10P2.removeChild(oldWin10);
            Win10P2.appendChild(newWin10);

            // -----------------------------------------------------------------------

            // Windows 8/8.1

            const Win8P = document.getElementsByClassName('node--id16')[0];
            const Win8P2 = Win8P.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldWin8 = Win8P2.getElementsByClassName('fa fas fa-folder-open')[0];

            const newWin8 = document.createElement('img');
            newWin8.id = 'win8icon';
            newWin8.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/windows/win8.png';
            newWin8.width = "34";
            newWin8.height = "34";

            Win8P2.removeChild(oldWin8);
            Win8P2.appendChild(newWin8);

            // -----------------------------------------------------------------------

            // Windows 7

            const Win7P = document.getElementsByClassName('node--id7')[0];
            const Win7P2 = Win7P.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldWin7 = Win7P2.getElementsByClassName('fa fas fa-folder')[0];

            const newWin7 = document.createElement('img');
            newWin7.id = 'win7icon';
            newWin7.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/windows/win7.png';
            newWin7.width = "36";
            newWin7.height = "36";

            Win7P2.removeChild(oldWin7);
            Win7P2.appendChild(newWin7);

            // -----------------------------------------------------------------------

            // Windows XP (Other)

            const WinXP_P = document.getElementsByClassName('node--id8')[0];
            const WinXP_P2 = WinXP_P.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldWinXP = WinXP_P2.getElementsByClassName('fa fas fa-folder-minus')[0];

            const newWinXP = document.createElement('img');
            newWinXP.id = 'winXPicon';
            newWinXP.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/windows/winxp.png';
            newWinXP.width = "40";
            newWinXP.height = "40";

            WinXP_P2.removeChild(oldWinXP);
            WinXP_P2.appendChild(newWinXP);

            // -----------------------------------------------------------------------

            // macOS 14 Sonoma (Small)

            const SonomaPS = document.getElementsByClassName('node--id361')[0];
            const SonomaP2S = SonomaPS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldSonomaS = SonomaP2S.getElementsByClassName('fa fab fa-apple')[0];

            const newSonomaS = document.createElement('img');
            newSonomaS.id = 'sonoma-icon-small';
            newSonomaS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/macos/sonoma.png';
            newSonomaS.width = "18";
            newSonomaS.height = "18";

            SonomaP2S.removeChild(oldSonomaS);
            SonomaP2S.appendChild(newSonomaS);

            // -----------------------------------------------------------------------

            // macOS 13 Ventura (Small)

            const VenturaPS = document.getElementsByClassName('node--id341')[0];
            const VenturaP2S = VenturaPS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldVenturaS = VenturaP2S.getElementsByClassName('fa fab fa-apple')[0];

            const newVenturaS = document.createElement('img');
            newVenturaS.id = 'ventura-icon-small';
            newVenturaS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/macos/ventura.png';
            newVenturaS.width = "18";
            newVenturaS.height = "18";

            VenturaP2S.removeChild(oldVenturaS);
            VenturaP2S.appendChild(newVenturaS);

            // -----------------------------------------------------------------------

            // macOS 12 Monterey (Small)

            const MontereyPS = document.getElementsByClassName('node--id307')[0];
            const MontereyP2S = MontereyPS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldMontereyS = MontereyP2S.getElementsByClassName('fa fab fa-apple')[0];

            const newMontereyS = document.createElement('img');
            newMontereyS.id = 'monterey-icon-small';
            newMontereyS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/macos/monterey.png';
            newMontereyS.width = "18";
            newMontereyS.height = "18";

            MontereyP2S.removeChild(oldMontereyS);
            MontereyP2S.appendChild(newMontereyS);

            // -----------------------------------------------------------------------

            // macOS 11 Big Sur (Small)

            const BigSurPS = document.getElementsByClassName('node--id239')[0];
            const BigSurP2S = BigSurPS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldBigSurS = BigSurP2S.getElementsByClassName('fa fab fa-apple')[0];

            const newBigSurS = document.createElement('img');
            newBigSurS.id = 'bigsur-icon-small';
            newBigSurS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/macos/bigsur.png';
            newBigSurS.width = "18";
            newBigSurS.height = "18";

            BigSurP2S.removeChild(oldBigSurS);
            BigSurP2S.appendChild(newBigSurS);

            // -----------------------------------------------------------------------

            // macOS 10.15 Catalina (Small)

            const CatalinaPS = document.getElementsByClassName('node--id238')[0];
            const CatalinaP2S = CatalinaPS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldCatalinaS = CatalinaP2S.getElementsByClassName('fa fab fa-apple')[0];

            const newCatalinaS = document.createElement('img');
            newCatalinaS.id = 'catalina-icon-small';
            newCatalinaS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/macos/catalina.png';
            newCatalinaS.width = "18";
            newCatalinaS.height = "18";

            CatalinaP2S.removeChild(oldCatalinaS);
            CatalinaP2S.appendChild(newCatalinaS);

            // -----------------------------------------------------------------------

            // macOS 10.14 Mojave (Small)

            const MojavePS = document.getElementsByClassName('node--id237')[0];
            const MojaveP2S = MojavePS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldMojaveS = MojaveP2S.getElementsByClassName('fa fab fa-apple')[0];

            const newMojaveS = document.createElement('img');
            newMojaveS.id = 'mojave-icon-small';
            newMojaveS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/macos/mojave.png';
            newMojaveS.width = "18";
            newMojaveS.height = "18";

            MojaveP2S.removeChild(oldMojaveS);
            MojaveP2S.appendChild(newMojaveS);

            // -----------------------------------------------------------------------

            // macOS 10.13 High Sierra (Small)

            const HighSierraPS = document.getElementsByClassName('node--id236')[0];
            const HighSierraP2S = HighSierraPS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldHighSierraS = HighSierraP2S.getElementsByClassName('fa fab fa-apple')[0];

            const newHighSierraS = document.createElement('img');
            newHighSierraS.id = 'h-sierra-icon-small';
            newHighSierraS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/macos/h-sierra.png';
            newHighSierraS.width = "18";
            newHighSierraS.height = "18";

            HighSierraP2S.removeChild(oldHighSierraS);
            HighSierraP2S.appendChild(newHighSierraS);

            // -----------------------------------------------------------------------

            // macOS 10.12 Sierra (Small)

            const SierraPS = document.getElementsByClassName('node--id235')[0];
            const SierraP2S = SierraPS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldSierraS = SierraP2S.getElementsByClassName('fa fab fa-apple')[0];

            const newSierraS = document.createElement('img');
            newSierraS.id = 'sierra-icon-small';
            newSierraS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/macos/sierra.png';
            newSierraS.width = "18";
            newSierraS.height = "18";

            SierraP2S.removeChild(oldSierraS);
            SierraP2S.appendChild(newSierraS);

            // -----------------------------------------------------------------------

            // macOS 10.11 El Capitan (Small)

            const CapitanPS = document.getElementsByClassName('node--id234')[0];
            const CapitanP2S = CapitanPS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldCapitanS = CapitanP2S.getElementsByClassName('fa fab fa-apple')[0];

            const newCapitanS = document.createElement('img');
            newCapitanS.id = 'el-capitan-icon-small';
            newCapitanS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/macos/el-capitan.png';
            newCapitanS.width = "18";
            newCapitanS.height = "18";

            CapitanP2S.removeChild(oldCapitanS);
            CapitanP2S.appendChild(newCapitanS);

            // -----------------------------------------------------------------------

            // Hackintosh - OpenCore (Small)

            const OpenCorePS = document.getElementsByClassName('node--id233')[0];
            const OpenCoreP2S = OpenCorePS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldOpenCoreS = OpenCoreP2S.getElementsByClassName('fa fas fa-spinner')[0];

            const newOpenCoreS = document.createElement('img');
            newOpenCoreS.id = 'opencore-icon-small';
            newOpenCoreS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/macos/opencore-sphere.png';
            newOpenCoreS.width = "18";
            newOpenCoreS.height = "18";

            OpenCoreP2S.removeChild(oldOpenCoreS);
            OpenCoreP2S.appendChild(newOpenCoreS);

            // -----------------------------------------------------------------------

            // macOS Category

            const MacOSCatPS = document.getElementsByClassName('node--id9')[0];
            const MacOSCatP2S = MacOSCatPS.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldMacOSCatS = MacOSCatP2S.getElementsByClassName('fa fab fa-apple')[0];

            const newMacOSCatS = document.createElement('img');
            newMacOSCatS.id = 'macos-cat-icon-small';
            newMacOSCatS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/macos/apple.png';
            newMacOSCatS.width = "34";
            newMacOSCatS.height = "34";

            MacOSCatP2S.removeChild(oldMacOSCatS);
            MacOSCatP2S.appendChild(newMacOSCatS);

            // -----------------------------------------------------------------------

            // GNU/Linux Category

            const LinuxCatPS = document.getElementsByClassName('node--id13')[0];
            const LinuxCatP2S = LinuxCatPS.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldLinuxCatS = LinuxCatP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newLinuxCatS = document.createElement('img');
            newLinuxCatS.id = 'linux-cat-icon-small';
            newLinuxCatS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/tux-default.png';
            newLinuxCatS.width = "34";
            newLinuxCatS.height = "34";

            LinuxCatP2S.removeChild(oldLinuxCatS);
            LinuxCatP2S.appendChild(newLinuxCatS);

            // -----------------------------------------------------------------------

            // Debian (Small)

            const DebianPS = document.getElementsByClassName('node--id273')[0];
            const DebianP2S = DebianPS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldDebianS = DebianP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newDebianS = document.createElement('img');
            newDebianS.id = 'debian-icon-small';
            newDebianS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/debian.png';
            newDebianS.width = "18";
            newDebianS.height = "18";

            DebianP2S.removeChild(oldDebianS);
            DebianP2S.appendChild(newDebianS);

            // -----------------------------------------------------------------------

            // Pardus (Small)

            const PardusPS = document.getElementsByClassName('node--id14')[0];
            const PardusP2S = PardusPS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldKaliLinux = PardusP2S.getElementsByClassName('fa fas fa-paw')[0];

            const newKaliLinux = document.createElement('img');
            newKaliLinux.id = 'pardus-icon-small';
            newKaliLinux.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/pardus.png';
            newKaliLinux.width = "18";
            newKaliLinux.height = "18";

            PardusP2S.removeChild(oldKaliLinux);
            PardusP2S.appendChild(newKaliLinux);

            // -----------------------------------------------------------------------

            // Kali Linux (Small)

            const KaliPS = document.getElementsByClassName('node--id277')[0];
            const KaliP2S = KaliPS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldKaliS = KaliP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newKaliS = document.createElement('img');
            newKaliS.id = 'kali-icon-small';
            newKaliS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/kali-linux.png';
            newKaliS.width = "18";
            newKaliS.height = "18";

            KaliP2S.removeChild(oldKaliS);
            KaliP2S.appendChild(newKaliS);

            // -----------------------------------------------------------------------

            // Ubuntu (Small)

            const UbuntuPS = document.getElementsByClassName('node--id266')[0];
            const UbuntuP2S = UbuntuPS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldUbuntuS = UbuntuP2S.getElementsByClassName('fa fab fa-ubuntu')[0];

            const newUbuntuS = document.createElement('img');
            newUbuntuS.id = 'ubuntu-icon-small';
            newUbuntuS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/ubuntu-solid.png';
            newUbuntuS.width = "18";
            newUbuntuS.height = "18";

            UbuntuP2S.removeChild(oldUbuntuS);
            UbuntuP2S.appendChild(newUbuntuS);

            // -----------------------------------------------------------------------

            // Linux Mint (Small)

            const LinuxMintPS = document.getElementsByClassName('node--id262')[0];
            const LinuxMintP2S = LinuxMintPS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldLinuxMintS = LinuxMintP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newLinuxMintS = document.createElement('img');
            newLinuxMintS.id = 'mint-icon-small';
            newLinuxMintS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/mint.png';
            newLinuxMintS.width = "18";
            newLinuxMintS.height = "18";

            LinuxMintP2S.removeChild(oldLinuxMintS);
            LinuxMintP2S.appendChild(newLinuxMintS);

            // -----------------------------------------------------------------------

            // Pop!_OS (Small)

            const PopOS_PS = document.getElementsByClassName('node--id272')[0];
            const PopOS_P2S = PopOS_PS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldPopOS_S = PopOS_P2S.getElementsByClassName('fa fas fa-parking')[0];

            const newPopOS_S = document.createElement('img');
            newPopOS_S.id = 'pop-os-icon-small';
            newPopOS_S.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/pop-os.png';
            newPopOS_S.width = "18";
            newPopOS_S.height = "18";

            PopOS_P2S.removeChild(oldPopOS_S);
            PopOS_P2S.appendChild(newPopOS_S);

            // -----------------------------------------------------------------------

            // Elementary OS (Small)

            const ElementaryOS_PS = document.getElementsByClassName('node--id271')[0];
            const ElementaryOS_P2S = ElementaryOS_PS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldElementaryOS_S = ElementaryOS_P2S.getElementsByClassName('fa fab fa-linux')[0];

            const newElementaryOS_S = document.createElement('img');
            newElementaryOS_S.id = 'elementary-os-icon-small';
            newElementaryOS_S.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/elementary-os.png';
            newElementaryOS_S.width = "18";
            newElementaryOS_S.height = "18";

            ElementaryOS_P2S.removeChild(oldElementaryOS_S);
            ElementaryOS_P2S.appendChild(newElementaryOS_S);

            // -----------------------------------------------------------------------

            // RedHat, CentOS and AlmaLinux (Small)

            const RedHatPS = document.getElementsByClassName('node--id267')[0];
            const RedHatP2S = RedHatPS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldRedHatS = RedHatP2S.getElementsByClassName('fa fab fa-redhat')[0];

            const newRedHatS = document.createElement('img');
            newRedHatS.id = 'redhat-icon-small';
            newRedHatS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/redhat.png';
            newRedHatS.width = "18";
            newRedHatS.height = "18";

            RedHatP2S.removeChild(oldRedHatS);
            RedHatP2S.appendChild(newRedHatS);

            // -----------------------------------------------------------------------

            // Fedora (Small)

            const FedoraPS = document.getElementsByClassName('node--id268')[0];
            const FedoraP2S = FedoraPS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldFedoraS = FedoraP2S.getElementsByClassName('fa fab fa-fedora')[0];

            const newFedoraS = document.createElement('img');
            newFedoraS.id = 'fedora-icon-small';
            newFedoraS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/fedora.png';
            newFedoraS.width = "18";
            newFedoraS.height = "18";

            FedoraP2S.removeChild(oldFedoraS);
            FedoraP2S.appendChild(newFedoraS);

            // -----------------------------------------------------------------------

            // OpenSUSE (Small)

            const OpenSusePS = document.getElementsByClassName('node--id270')[0];
            const OpenSuseP2S = OpenSusePS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldOpenSuseS = OpenSuseP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newOpenSuseS = document.createElement('img');
            newOpenSuseS.id = 'opensuse-icon-small';
            newOpenSuseS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/opensuse.png';
            newOpenSuseS.width = "18";
            newOpenSuseS.height = "18";

            OpenSuseP2S.removeChild(oldOpenSuseS);
            OpenSuseP2S.appendChild(newOpenSuseS);

            // -----------------------------------------------------------------------

            // Arch Linux (Small)

            const ArchLinuxPS = document.getElementsByClassName('node--id263')[0];
            const ArchLinuxP2S = ArchLinuxPS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldArchLinuxS = ArchLinuxP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newArchLinuxS = document.createElement('img');
            newArchLinuxS.id = 'arch-icon-small';
            newArchLinuxS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/arch.png';
            newArchLinuxS.width = "18";
            newArchLinuxS.height = "18";

            ArchLinuxP2S.removeChild(oldArchLinuxS);
            ArchLinuxP2S.appendChild(newArchLinuxS);

            // -----------------------------------------------------------------------

            // Manjaro Linux (Small)

            const ManjaroLinuxPS = document.getElementsByClassName('node--id274')[0];
            const ManjaroLinuxP2S = ManjaroLinuxPS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldManjaroLinuxS = ManjaroLinuxP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newManjaroLinuxS = document.createElement('img');
            newManjaroLinuxS.id = 'manjaro-icon-small';
            newManjaroLinuxS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/manjaro-regular.png';
            newManjaroLinuxS.width = "16";
            newManjaroLinuxS.height = "16";

            ManjaroLinuxP2S.removeChild(oldManjaroLinuxS);
            ManjaroLinuxP2S.appendChild(newManjaroLinuxS);

            // -----------------------------------------------------------------------

            // Gentoo (Small)

            const GentooPS = document.getElementsByClassName('node--id276')[0];
            const GentooP2S = GentooPS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldGentooS = GentooP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newGentooS = document.createElement('img');
            newGentooS.id = 'gentoo-icon-small';
            newGentooS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/gentoo.png';
            newGentooS.width = "17";
            newGentooS.height = "17";

            GentooP2S.removeChild(oldGentooS);
            GentooP2S.appendChild(newGentooS);

            // -----------------------------------------------------------------------

            // Void Linux (Small)

            const VoidLinuxPS = document.getElementsByClassName('node--id275')[0];
            const VoidLinuxP2S = VoidLinuxPS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldVoidLinuxS = VoidLinuxP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newVoidLinuxS = document.createElement('img');
            newVoidLinuxS.id = 'void-icon-small';
            newVoidLinuxS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/void.png';
            newVoidLinuxS.width = "17";
            newVoidLinuxS.height = "17";

            VoidLinuxP2S.removeChild(oldVoidLinuxS);
            VoidLinuxP2S.appendChild(newVoidLinuxS);

            // -----------------------------------------------------------------------

            // Slackware (Small)

            const SlackwarePS = document.getElementsByClassName('node--id278')[0];
            const SlackwareP2S = SlackwarePS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldSlackwareS = SlackwareP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newSlackwareS = document.createElement('img');
            newSlackwareS.id = 'slackware-icon-small';
            newSlackwareS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/slackware.png';
            newSlackwareS.width = "19";
            newSlackwareS.height = "19";

            SlackwareP2S.removeChild(oldSlackwareS);
            SlackwareP2S.appendChild(newSlackwareS);

            // -----------------------------------------------------------------------

            // Pisi and Milis (Small)

            const PisiLinuxPS = document.getElementsByClassName('node--id265')[0];
            const PisiLinuxP2S = PisiLinuxPS.getElementsByClassName('xfa-nit-node-icon-small')[0];

            const oldPisiLinuxS = PisiLinuxP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newPisiLinuxS = document.createElement('img');
            newPisiLinuxS.id = 'pisi-icon-small';
            newPisiLinuxS.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/pisi.png';
            newPisiLinuxS.width = "18";
            newPisiLinuxS.height = "18";

            PisiLinuxP2S.removeChild(oldPisiLinuxS);
            PisiLinuxP2S.appendChild(newPisiLinuxS);
        }

        // -----------------------------------------------------------------------
        // -----------------------------------------------------------------------
        // -----------------------------------------------------------------------
        // -----------------------------------------------------------------------

        else if (window.location.href.indexOf("https://www.technopat.net/sosyal/bolum/macos.9/") > -1)
        {
            // macOS Kategorisi (MacNormal)

            // -----------------------------------------------------------------------

            // macOS 14 Sonoma

            const SonomaP = document.getElementsByClassName('node--id361')[0];
            if (typeof SonomaP !== 'undefined') {
                console.log("Technopat'tan herkese merhabalar!");
            }
            const SonomaP2 = SonomaP.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldSonoma = SonomaP2.getElementsByClassName('fa fab fa-apple')[0];

            const newSonoma = document.createElement('img');
            newSonoma.id = 'sonoma-icon';
            newSonoma.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/macos/sonoma.png';
            newSonoma.width = "38";
            newSonoma.height = "38";

            SonomaP2.removeChild(oldSonoma);
            SonomaP2.appendChild(newSonoma);

            // -----------------------------------------------------------------------

            // Hackintosh - OpenCore

            const OpenCoreP = document.getElementsByClassName('node--id233')[0];
            const OpenCoreP2 = OpenCoreP.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldOpenCore = OpenCoreP2.getElementsByClassName('fa fas fa-spinner')[0];

            const newOpenCore = document.createElement('img');
            newOpenCore.id = 'opencore-icon';
            newOpenCore.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/macos/opencore-sphere.png';
            newOpenCore.width = "33";
            newOpenCore.height = "33";

            OpenCoreP2.removeChild(oldOpenCore);
            OpenCoreP2.appendChild(newOpenCore);

            // -----------------------------------------------------------------------

            // macOS 13 Ventura

            const VenturaP = document.getElementsByClassName('node--id341')[0];
            const VenturaP2 = VenturaP.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldVentura = VenturaP2.getElementsByClassName('fa fab fa-apple')[0];

            const newVentura = document.createElement('img');
            newVentura.id = 'ventura-icon';
            newVentura.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/macos/ventura.png';
            newVentura.width = "38";
            newVentura.height = "38";

            VenturaP2.removeChild(oldVentura);
            VenturaP2.appendChild(newVentura);

            // -----------------------------------------------------------------------

            // macOS 12 Monterey

            const MontereyP = document.getElementsByClassName('node--id307')[0];
            const MontereyP2 = MontereyP.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldMonterey = MontereyP2.getElementsByClassName('fa fab fa-apple')[0];

            const newMonterey = document.createElement('img');
            newMonterey.id = 'monterey-icon';
            newMonterey.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/macos/monterey.png';
            newMonterey.width = "38";
            newMonterey.height = "38";

            MontereyP2.removeChild(oldMonterey);
            MontereyP2.appendChild(newMonterey);

            // -----------------------------------------------------------------------

            // macOS 11 Big Sur

            const BigSurP = document.getElementsByClassName('node--id239')[0];
            const BigSurP2 = BigSurP.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldBigSur = BigSurP2.getElementsByClassName('fa fab fa-apple')[0];

            const newBigSur = document.createElement('img');
            newBigSur.id = 'bigsur-icon';
            newBigSur.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/macos/bigsur.png';
            newBigSur.width = "40";
            newBigSur.height = "40";

            BigSurP2.removeChild(oldBigSur);
            BigSurP2.appendChild(newBigSur);

            // -----------------------------------------------------------------------

            // macOS 10.15 Catalina

            const CatalinaP = document.getElementsByClassName('node--id238')[0];
            const CatalinaP2 = CatalinaP.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldCatalina = CatalinaP2.getElementsByClassName('fa fab fa-apple')[0];

            const newCatalina = document.createElement('img');
            newCatalina.id = 'catalina-icon';
            newCatalina.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/macos/catalina.png';
            newCatalina.width = "40";
            newCatalina.height = "40";

            CatalinaP2.removeChild(oldCatalina);
            CatalinaP2.appendChild(newCatalina);

            // -----------------------------------------------------------------------

            // macOS 10.14 Mojave

            const MojaveP = document.getElementsByClassName('node--id237')[0];
            const MojaveP2 = MojaveP.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldMojave = MojaveP2.getElementsByClassName('fa fab fa-apple')[0];

            const newMojave = document.createElement('img');
            newMojave.id = 'mojave-icon';
            newMojave.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/macos/mojave.png';
            newMojave.width = "38";
            newMojave.height = "38";

            MojaveP2.removeChild(oldMojave);
            MojaveP2.appendChild(newMojave);

            // -----------------------------------------------------------------------

            // macOS 10.13 High Sierra

            const HighSierraP = document.getElementsByClassName('node--id236')[0];
            const HighSierraP2 = HighSierraP.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldHighSierra = HighSierraP2.getElementsByClassName('fa fab fa-apple')[0];

            const newHighSierra = document.createElement('img');
            newHighSierra.id = 'h-sierra-icon';
            newHighSierra.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/macos/h-sierra.png';
            newHighSierra.width = "38";
            newHighSierra.height = "38";

            HighSierraP2.removeChild(oldHighSierra);
            HighSierraP2.appendChild(newHighSierra);

            // -----------------------------------------------------------------------

            // macOS 10.12 Sierra

            const SierraP = document.getElementsByClassName('node--id235')[0];
            const SierraP2 = SierraP.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldSierra = SierraP2.getElementsByClassName('fa fab fa-apple')[0];

            const newSierra = document.createElement('img');
            newSierra.id = 'sierra-icon';
            newSierra.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/macos/sierra.png';
            newSierra.width = "38";
            newSierra.height = "38";

            SierraP2.removeChild(oldSierra);
            SierraP2.appendChild(newSierra);

            // -----------------------------------------------------------------------

            // macOS 10.11 El Capitan

            const CapitanP = document.getElementsByClassName('node--id234')[0];
            const CapitanP2 = CapitanP.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldCapitan = CapitanP2.getElementsByClassName('fa fab fa-apple')[0];

            const newCapitan = document.createElement('img');
            newCapitan.id = 'el-capitan-icon';
            newCapitan.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/macos/el-capitan.png';
            newCapitan.width = "38";
            newCapitan.height = "38";

            CapitanP2.removeChild(oldCapitan);
            CapitanP2.appendChild(newCapitan);
        }

        else if (window.location.href.indexOf("https://www.technopat.net/sosyal/bolum/gnu-linux.13/") > -1)
        {
            // Linux Kategorisi (LinuxNormal)

            // -----------------------------------------------------------------------

            // Debian

            const DebianP = document.getElementsByClassName('node--id273')[0];
            if (typeof DebianP !== 'undefined') {
                console.log("Technopat'tan herkese merhabalar!");
            }
            const DebianP2 = DebianP.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldDebian = DebianP2.getElementsByClassName('fa fab fa-linux')[0];

            const newDebian = document.createElement('img');
            newDebian.id = 'debian-icon';
            newDebian.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/debian.png';
            newDebian.width = "38";
            newDebian.height = "38";

            DebianP2.removeChild(oldDebian);
            DebianP2.appendChild(newDebian);

            // -----------------------------------------------------------------------

            // Pardus

            const PardusP = document.getElementsByClassName('node--id14')[0];
            const PardusP2 = PardusP.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldPardus = PardusP2.getElementsByClassName('fa fas fa-paw')[0];

            const newPardus = document.createElement('img');
            newPardus.id = 'pardus-icon';
            newPardus.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/pardus.png';
            newPardus.width = "38";
            newPardus.height = "38";

            PardusP2.removeChild(oldPardus);
            PardusP2.appendChild(newPardus);

            // -----------------------------------------------------------------------

            // Kali Linux

            const KaliLinuxP = document.getElementsByClassName('node--id277')[0];
            const KaliLinuxP2 = KaliLinuxP.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldKaliLinux = KaliLinuxP2.getElementsByClassName('fa fab fa-linux')[0];

            const newKaliLinux = document.createElement('img');
            newKaliLinux.id = 'kali-linux-icon';
            newKaliLinux.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/kali-linux.png';
            newKaliLinux.width = "38";
            newKaliLinux.height = "38";

            KaliLinuxP2.removeChild(oldKaliLinux);
            KaliLinuxP2.appendChild(newKaliLinux);

            // -----------------------------------------------------------------------

            // Ubuntu

            const UbuntuP = document.getElementsByClassName('node--id266')[0];
            const UbuntuP2 = UbuntuP.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldUbuntu = UbuntuP2.getElementsByClassName('fa fab fa-ubuntu')[0];

            const newUbuntu = document.createElement('img');
            newUbuntu.id = 'ubuntu-icon';
            newUbuntu.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/ubuntu-solid.png';
            newUbuntu.width = "34";
            newUbuntu.height = "34";

            UbuntuP2.removeChild(oldUbuntu);
            UbuntuP2.appendChild(newUbuntu);

            // -----------------------------------------------------------------------

            // Linux Mint

            const LinuxMintP = document.getElementsByClassName('node--id262')[0];
            const LinuxMintP2 = LinuxMintP.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldLinuxMint = LinuxMintP2.getElementsByClassName('fa fab fa-linux')[0];

            const newLinuxMint = document.createElement('img');
            newLinuxMint.id = 'linux-mint-icon';
            newLinuxMint.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/mint.png';
            newLinuxMint.width = "34";
            newLinuxMint.height = "34";

            LinuxMintP2.removeChild(oldLinuxMint);
            LinuxMintP2.appendChild(newLinuxMint);

            // -----------------------------------------------------------------------

            // Pop!_OS

            const PopOS_P = document.getElementsByClassName('node--id272')[0];
            const PopOS_P2 = PopOS_P.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldPopOS_ = PopOS_P2.getElementsByClassName('fa fas fa-parking')[0];

            const newPopOS_ = document.createElement('img');
            newPopOS_.id = 'pop-os-icon';
            newPopOS_.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/pop-os.png';
            newPopOS_.width = "33";
            newPopOS_.height = "33";

            PopOS_P2.removeChild(oldPopOS_);
            PopOS_P2.appendChild(newPopOS_);

            // -----------------------------------------------------------------------

            // Elementary OS

            const ElementaryOS_P = document.getElementsByClassName('node--id271')[0];
            const ElementaryOS_P2 = ElementaryOS_P.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldElementaryOS_ = ElementaryOS_P2.getElementsByClassName('fa fab fa-linux')[0];

            const newElementaryOS_ = document.createElement('img');
            newElementaryOS_.id = 'elementary-os-icon';
            newElementaryOS_.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/elementary-os.png';
            newElementaryOS_.width = "33";
            newElementaryOS_.height = "33";

            ElementaryOS_P2.removeChild(oldElementaryOS_);
            ElementaryOS_P2.appendChild(newElementaryOS_);

            // -----------------------------------------------------------------------

            // RedHat, CentOS and AlmaLinux

            const RedHatP = document.getElementsByClassName('node--id267')[0];
            const RedHatP2 = RedHatP.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldRedHat = RedHatP2.getElementsByClassName('fa fab fa-redhat')[0];

            const newRedHat = document.createElement('img');
            newRedHat.id = 'redhat-icon';
            newRedHat.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/redhat.png';
            newRedHat.width = "33";
            newRedHat.height = "33";

            RedHatP2.removeChild(oldRedHat);
            RedHatP2.appendChild(newRedHat);

            // -----------------------------------------------------------------------

            // Fedora

            const FedoraP = document.getElementsByClassName('node--id268')[0];
            const FedoraP2 = FedoraP.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldFedora = FedoraP2.getElementsByClassName('fa fab fa-fedora')[0];

            const newFedora = document.createElement('img');
            newFedora.id = 'fedora-icon';
            newFedora.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/fedora.png';
            newFedora.width = "32";
            newFedora.height = "32";

            FedoraP2.removeChild(oldFedora);
            FedoraP2.appendChild(newFedora);

            // -----------------------------------------------------------------------

            // OpenSUSE

            const OpenSUSEP = document.getElementsByClassName('node--id270')[0];
            const OpenSUSEP2 = OpenSUSEP.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldOpenSUSE = OpenSUSEP2.getElementsByClassName('fa fab fa-linux')[0];

            const newOpenSUSE = document.createElement('img');
            newOpenSUSE.id = 'opensuse-icon';
            newOpenSUSE.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/opensuse.png';
            newOpenSUSE.width = "32";
            newOpenSUSE.height = "32";

            OpenSUSEP2.removeChild(oldOpenSUSE);
            OpenSUSEP2.appendChild(newOpenSUSE);

            // -----------------------------------------------------------------------

            // Arch Linux

            const ArchLinuxP = document.getElementsByClassName('node--id263')[0];
            const ArchLinuxP2 = ArchLinuxP.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldArchLinux = ArchLinuxP2.getElementsByClassName('fa fab fa-linux')[0];

            const newArchLinux = document.createElement('img');
            newArchLinux.id = 'arch-linux-icon';
            newArchLinux.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/arch.png';
            newArchLinux.width = "32";
            newArchLinux.height = "32";

            ArchLinuxP2.removeChild(oldArchLinux);
            ArchLinuxP2.appendChild(newArchLinux);

            // -----------------------------------------------------------------------

            // Manjaro Linux

            const ManjaroLinuxP = document.getElementsByClassName('node--id274')[0];
            const ManjaroLinuxP2 = ManjaroLinuxP.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldManjaroLinux = ManjaroLinuxP2.getElementsByClassName('fa fab fa-linux')[0];

            const newManjaroLinux = document.createElement('img');
            newManjaroLinux.id = 'manjaro-linux-icon';
            newManjaroLinux.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/manjaro.png';
            newManjaroLinux.width = "34";
            newManjaroLinux.height = "34";

            ManjaroLinuxP2.removeChild(oldManjaroLinux);
            ManjaroLinuxP2.appendChild(newManjaroLinux);

            // -----------------------------------------------------------------------

            // Gentoo

            const GentooP = document.getElementsByClassName('node--id276')[0];
            const GentooP2 = GentooP.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldGentoo = GentooP2.getElementsByClassName('fa fab fa-linux')[0];

            const newGentoo = document.createElement('img');
            newGentoo.id = 'gentoo-icon';
            newGentoo.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/gentoo.png';
            newGentoo.width = "30";
            newGentoo.height = "30";

            GentooP2.removeChild(oldGentoo);
            GentooP2.appendChild(newGentoo);

            // -----------------------------------------------------------------------

            // Void Linux

            const VoidLinuxP = document.getElementsByClassName('node--id275')[0];
            const VoidLinuxP2 = VoidLinuxP.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldVoidLinux = VoidLinuxP2.getElementsByClassName('fa fab fa-linux')[0];

            const newVoidLinux = document.createElement('img');
            newVoidLinux.id = 'void-linux-icon';
            newVoidLinux.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/void.png';
            newVoidLinux.width = "32";
            newVoidLinux.height = "32";

            VoidLinuxP2.removeChild(oldVoidLinux);
            VoidLinuxP2.appendChild(newVoidLinux);

            // -----------------------------------------------------------------------

            // Slackware

            const SlackwareP = document.getElementsByClassName('node--id278')[0];
            const SlackwareP2 = SlackwareP.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldSlackware = SlackwareP2.getElementsByClassName('fa fab fa-linux')[0];

            const newSlackware = document.createElement('img');
            newSlackware.id = 'slackware-icon';
            newSlackware.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/slackware.png';
            newSlackware.width = "36";
            newSlackware.height = "36";

            SlackwareP2.removeChild(oldSlackware);
            SlackwareP2.appendChild(newSlackware);

            // -----------------------------------------------------------------------

            // Pisi and Milis

            const PisiLinuxP = document.getElementsByClassName('node--id265')[0];
            const PisiLinuxP2 = PisiLinuxP.getElementsByClassName('xfa-nit-node-icon')[0];

            const oldPisiLinux = PisiLinuxP2.getElementsByClassName('fa fab fa-linux')[0];

            const newPisiLinux = document.createElement('img');
            newPisiLinux.id = 'pisi-linux-icon';
            newPisiLinux.src = 'https://raw.githubusercontent.com/stereoDotLuigi/OS-Icons/mario/linux/pisi.png';
            newPisiLinux.width = "36";
            newPisiLinux.height = "36";

            PisiLinuxP2.removeChild(oldPisiLinux);
            PisiLinuxP2.appendChild(newPisiLinux);
        }

    }