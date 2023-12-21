// Yardımları için Nizel G'ye ve Vavien.'e teşekkürlerimi sunarım.

var baseElmN = document.createElement('img');
baseElmN.width = 34;
baseElmN.height = 34;

var baseElmS = document.createElement('img');
baseElmS.width = 18;
baseElmS.height = 18; 

document.addEventListener("DOMContentLoaded", function(event) 
    {
        if ((window.location.href == "https://www.technopat.net/sosyal/") || (window.location.href == "https://www.technopat.net/sosyal/kategori/isletim-sistemleri.6/") || (window.location.href == "https://techolay.net/sosyal/") || (window.location.href == "https://techolay.net/sosyal/kategori/isletim-sistemleri.51/"))
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

            const newWin11 = baseElmN.cloneNode(true);
            newWin11.src = chrome.runtime.getURL('icons/windows/win11/34.png');
            Win11P2.insertBefore(newWin11, oldWin11);

            // -----------------------------------------------------------------------

            // Windows 10

            const Win10P = document.getElementsByClassName('node--id113')[0];
            const Win10P2 = Win10P.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldWin10 = Win10P2.getElementsByClassName('fa fab fa-windows')[0];

            const newWin10 = baseElmN.cloneNode(true);
            newWin10.src = chrome.runtime.getURL('icons/windows/win10/34.png');
            Win10P2.insertBefore(newWin10, oldWin10);

            // -----------------------------------------------------------------------

            // Windows 8/8.1

            const Win8P = document.getElementsByClassName('node--id16')[0];
            const Win8P2 = Win8P.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldWin8 = Win8P2.getElementsByClassName('fa fas fa-folder-open')[0];

            const newWin8 = baseElmN.cloneNode(true);
            newWin8.src = chrome.runtime.getURL('icons/windows/win8/34.png');
            Win8P2.insertBefore(newWin8, oldWin8);

            // -----------------------------------------------------------------------

            // Windows 7

            const Win7P = document.getElementsByClassName('node--id7')[0];
            const Win7P2 = Win7P.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldWin7 = Win7P2.getElementsByClassName('fa fas fa-folder')[0];

            const newWin7 = baseElmN.cloneNode(true);
            newWin7.src = chrome.runtime.getURL('icons/windows/win7/34.png');
            Win7P2.insertBefore(newWin7, oldWin7);

            // -----------------------------------------------------------------------

            // Windows XP (Other)

            const WinXP_P = document.getElementsByClassName('node--id8')[0];
            const WinXP_P2 = WinXP_P.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldWinXP = WinXP_P2.getElementsByClassName('fa fas fa-folder-minus')[0];

            const newWinXP = baseElmN.cloneNode(true);
            newWinXP.src = chrome.runtime.getURL('icons/windows/win-other/34.png');
            WinXP_P2.insertBefore(newWinXP, oldWinXP);

            // -----------------------------------------------------------------------

            // macOS 14 Sonoma (Small)

            const SonomaPS = document.getElementsByClassName('node--id361')[0];
            const SonomaP2S = SonomaPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldSonomaS = SonomaP2S.getElementsByClassName('fa fab fa-apple')[0];

            const newSonomaS = baseElmS.cloneNode(true);
            newSonomaS.src = chrome.runtime.getURL('icons/macos/sonoma/18.png');
            SonomaP2S.insertBefore(newSonomaS, oldSonomaS);

            // -----------------------------------------------------------------------

            // macOS 13 Ventura (Small)

            const VenturaPS = document.getElementsByClassName('node--id341')[0];
            const VenturaP2S = VenturaPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldVenturaS = VenturaP2S.getElementsByClassName('fa fab fa-apple')[0];

            const newVenturaS = baseElmS.cloneNode(true);
            newVenturaS.src = chrome.runtime.getURL('icons/macos/ventura/18.png');
            VenturaP2S.insertBefore(newVenturaS, oldVenturaS);

            // -----------------------------------------------------------------------

            // macOS 12 Monterey (Small)

            const MontereyPS = document.getElementsByClassName('node--id307')[0];
            const MontereyP2S = MontereyPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldMontereyS = MontereyP2S.getElementsByClassName('fa fab fa-apple')[0];

            const newMontereyS = baseElmS.cloneNode(true);
            newMontereyS.src = chrome.runtime.getURL('icons/macos/monterey/18.png');
            MontereyP2S.insertBefore(newMontereyS, oldMontereyS);

            // -----------------------------------------------------------------------

            // macOS 11 Big Sur (Small)

            const BigSurPS = document.getElementsByClassName('node--id239')[0];
            const BigSurP2S = BigSurPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldBigSurS = BigSurP2S.getElementsByClassName('fa fab fa-apple')[0];

            const newBigSurS = baseElmS.cloneNode(true);
            newBigSurS.src = chrome.runtime.getURL('icons/macos/big-sur/18.png');
            BigSurP2S.insertBefore(newBigSurS, oldBigSurS);

            // -----------------------------------------------------------------------

            // macOS 10.15 Catalina (Small)

            const CatalinaPS = document.getElementsByClassName('node--id238')[0];
            const CatalinaP2S = CatalinaPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldCatalinaS = CatalinaP2S.getElementsByClassName('fa fab fa-apple')[0];

            const newCatalinaS = baseElmS.cloneNode(true);
            newCatalinaS.src = chrome.runtime.getURL('icons/macos/catalina/18.png');
            CatalinaP2S.insertBefore(newCatalinaS, oldCatalinaS);

            // -----------------------------------------------------------------------

            // macOS 10.14 Mojave (Small)

            const MojavePS = document.getElementsByClassName('node--id237')[0];
            const MojaveP2S = MojavePS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldMojaveS = MojaveP2S.getElementsByClassName('fa fab fa-apple')[0];

            const newMojaveS = baseElmS.cloneNode(true);
            newMojaveS.src = chrome.runtime.getURL('icons/macos/mojave/18.png');
            MojaveP2S.insertBefore(newMojaveS, oldMojaveS);

            // -----------------------------------------------------------------------

            // macOS 10.13 High Sierra (Small)

            const HighSierraPS = document.getElementsByClassName('node--id236')[0];
            const HighSierraP2S = HighSierraPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldHighSierraS = HighSierraP2S.getElementsByClassName('fa fab fa-apple')[0];

            const newHighSierraS = baseElmS.cloneNode(true);
            newHighSierraS.src = chrome.runtime.getURL('icons/macos/h-sierra/18.png');
            HighSierraP2S.insertBefore(newHighSierraS, oldHighSierraS);

            // -----------------------------------------------------------------------

            // macOS 10.12 Sierra (Small)

            const SierraPS = document.getElementsByClassName('node--id235')[0];
            const SierraP2S = SierraPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldSierraS = SierraP2S.getElementsByClassName('fa fab fa-apple')[0];

            const newSierraS = baseElmS.cloneNode(true);
            newSierraS.src = chrome.runtime.getURL('icons/macos/sierra/18.png');
            SierraP2S.insertBefore(newSierraS, oldSierraS);

            // -----------------------------------------------------------------------

            // macOS 10.11 El Capitan (Small)

            const CapitanPS = document.getElementsByClassName('node--id234')[0];
            const CapitanP2S = CapitanPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldCapitanS = CapitanP2S.getElementsByClassName('fa fab fa-apple')[0];

            const newCapitanS = baseElmS.cloneNode(true);
            newCapitanS.src = chrome.runtime.getURL('icons/macos/el-capitan/18.png');
            CapitanP2S.insertBefore(newCapitanS, oldCapitanS);

            // -----------------------------------------------------------------------

            // Hackintosh - OpenCore (Small)

            const OpenCorePS = document.getElementsByClassName('node--id233')[0];
            const OpenCoreP2S = OpenCorePS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldOpenCoreS = OpenCoreP2S.getElementsByClassName('fa fas fa-spinner')[0];

            const newOpenCoreS = baseElmS.cloneNode(true);
            newOpenCoreS.src = chrome.runtime.getURL('icons/macos/opencore/18.png');
            OpenCoreP2S.insertBefore(newOpenCoreS, oldOpenCoreS);

            // -----------------------------------------------------------------------

            // macOS Category

            const MacOSCatPS = document.getElementsByClassName('node--id9')[0];
            const MacOSCatP2S = MacOSCatPS.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldMacOSCatS = MacOSCatP2S.getElementsByClassName('fa fab fa-apple')[0];

            const newMacOSCatS = baseElmN.cloneNode(true);
            newMacOSCatS.src = chrome.runtime.getURL('icons/macos/macos-cat/34.png');
            MacOSCatP2S.insertBefore(newMacOSCatS, oldMacOSCatS);

            // -----------------------------------------------------------------------

            // GNU/Linux Category

            const LinuxCatPS = document.getElementsByClassName('node--id13')[0];
            const LinuxCatP2S = LinuxCatPS.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldLinuxCatS = LinuxCatP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newLinuxCatS = baseElmN.cloneNode(true);
            newLinuxCatS.src = chrome.runtime.getURL('icons/linux/linux-cat/34.png');
            LinuxCatP2S.insertBefore(newLinuxCatS, oldLinuxCatS);

            // -----------------------------------------------------------------------

            // Debian (Small)

            const DebianPS = document.getElementsByClassName('node--id273')[0];
            const DebianP2S = DebianPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldDebianS = DebianP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newDebianS = baseElmS.cloneNode(true);
            newDebianS.src = chrome.runtime.getURL('icons/linux/debian/18.png');
            DebianP2S.insertBefore(newDebianS, oldDebianS);

            // -----------------------------------------------------------------------

            // Pardus (Small)

            const PardusPS = document.getElementsByClassName('node--id14')[0];
            const PardusP2S = PardusPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldPardusS = PardusP2S.getElementsByClassName('fa fas fa-paw')[0];

            const newPardusS = baseElmS.cloneNode(true);
            newPardusS.src = chrome.runtime.getURL('icons/linux/pardus/18.png');
            PardusP2S.insertBefore(newPardusS, oldPardusS);

            // -----------------------------------------------------------------------

            // Kali Linux (Small)

            const KaliPS = document.getElementsByClassName('node--id277')[0];
            const KaliP2S = KaliPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldKaliS = KaliP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newKaliS = baseElmS.cloneNode(true);
            newKaliS.src = chrome.runtime.getURL('icons/linux/kali-linux/18.png');
            KaliP2S.insertBefore(newKaliS, oldKaliS);

            // -----------------------------------------------------------------------

            // Ubuntu (Small)

            const UbuntuPS = document.getElementsByClassName('node--id266')[0];
            const UbuntuP2S = UbuntuPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldUbuntuS = UbuntuP2S.getElementsByClassName('fa fab fa-ubuntu')[0];

            const newUbuntuS = baseElmS.cloneNode(true);
            newUbuntuS.src = chrome.runtime.getURL('icons/linux/ubuntu/18.png');
            UbuntuP2S.insertBefore(newUbuntuS, oldUbuntuS);

            // -----------------------------------------------------------------------

            // Linux Mint (Small)

            const LinuxMintPS = document.getElementsByClassName('node--id262')[0];
            const LinuxMintP2S = LinuxMintPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldLinuxMintS = LinuxMintP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newLinuxMintS = baseElmS.cloneNode(true);
            newLinuxMintS.src = chrome.runtime.getURL('icons/linux/linux-mint/18.png');
            LinuxMintP2S.insertBefore(newLinuxMintS, oldLinuxMintS);

            // -----------------------------------------------------------------------

            // Pop!_OS (Small)

            const PopOS_PS = document.getElementsByClassName('node--id272')[0];
            const PopOS_P2S = PopOS_PS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldPopOS_S = PopOS_P2S.getElementsByClassName('fa fas fa-parking')[0];

            const newPopOS_S = baseElmS.cloneNode(true);
            newPopOS_S.src = chrome.runtime.getURL('icons/linux/pop-os/18.png');
            PopOS_P2S.insertBefore(newPopOS_S, oldPopOS_S);

            // -----------------------------------------------------------------------

            // Elementary OS (Small)

            const ElementaryOS_PS = document.getElementsByClassName('node--id271')[0];
            const ElementaryOS_P2S = ElementaryOS_PS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldElementaryOS_S = ElementaryOS_P2S.getElementsByClassName('fa fab fa-linux')[0];

            const newElementaryOS_S = baseElmS.cloneNode(true);
            newElementaryOS_S.src = chrome.runtime.getURL('icons/linux/elementary-os/18.png');
            ElementaryOS_P2S.insertBefore(newElementaryOS_S, oldElementaryOS_S);

            // -----------------------------------------------------------------------

            // RedHat, CentOS and AlmaLinux (Small)

            const RedHatPS = document.getElementsByClassName('node--id267')[0];
            const RedHatP2S = RedHatPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldRedHatS = RedHatP2S.getElementsByClassName('fa fab fa-redhat')[0];

            const newRedHatS = baseElmS.cloneNode(true);
            newRedHatS.src = chrome.runtime.getURL('icons/linux/redhat/18.png');
            RedHatP2S.insertBefore(newRedHatS, oldRedHatS);

            // -----------------------------------------------------------------------

            // Fedora (Small)

            const FedoraPS = document.getElementsByClassName('node--id268')[0];
            const FedoraP2S = FedoraPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldFedoraS = FedoraP2S.getElementsByClassName('fa fab fa-fedora')[0];

            const newFedoraS = baseElmS.cloneNode(true);
            newFedoraS.src = chrome.runtime.getURL('icons/linux/fedora/18.png');
            FedoraP2S.insertBefore(newFedoraS, oldFedoraS);
            // -----------------------------------------------------------------------

            // OpenSUSE (Small)

            const OpenSusePS = document.getElementsByClassName('node--id270')[0];
            const OpenSuseP2S = OpenSusePS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldOpenSuseS = OpenSuseP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newOpenSuseS = baseElmS.cloneNode(true);
            newOpenSuseS.src = chrome.runtime.getURL('icons/linux/opensuse/18.png');
            OpenSuseP2S.insertBefore(newOpenSuseS, oldOpenSuseS);

            // -----------------------------------------------------------------------

            // Arch Linux (Small)

            const ArchLinuxPS = document.getElementsByClassName('node--id263')[0];
            const ArchLinuxP2S = ArchLinuxPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldArchLinuxS = ArchLinuxP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newArchLinuxS = baseElmS.cloneNode(true);
            newArchLinuxS.src = chrome.runtime.getURL('icons/linux/arch/18.png');
            ArchLinuxP2S.insertBefore(newArchLinuxS, oldArchLinuxS);

            // -----------------------------------------------------------------------

            // Manjaro Linux (Small)

            const ManjaroLinuxPS = document.getElementsByClassName('node--id274')[0];
            const ManjaroLinuxP2S = ManjaroLinuxPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldManjaroLinuxS = ManjaroLinuxP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newManjaroLinuxS = baseElmS.cloneNode(true);
            newManjaroLinuxS.src = chrome.runtime.getURL('icons/linux/manjaro/18.png');
            ManjaroLinuxP2S.insertBefore(newManjaroLinuxS, oldManjaroLinuxS);

            // -----------------------------------------------------------------------

            // Gentoo (Small)

            const GentooPS = document.getElementsByClassName('node--id276')[0];
            const GentooP2S = GentooPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldGentooS = GentooP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newGentooS = baseElmS.cloneNode(true);
            newGentooS.src = chrome.runtime.getURL('icons/linux/gentoo/18.png');
            GentooP2S.insertBefore(newGentooS, oldGentooS);

            // -----------------------------------------------------------------------

            // Void Linux (Small)

            const VoidLinuxPS = document.getElementsByClassName('node--id275')[0];
            const VoidLinuxP2S = VoidLinuxPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldVoidLinuxS = VoidLinuxP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newVoidLinuxS = baseElmS.cloneNode(true);
            newVoidLinuxS.src = chrome.runtime.getURL('icons/linux/void/18.png');
            VoidLinuxP2S.insertBefore(newVoidLinuxS, oldVoidLinuxS);

            // -----------------------------------------------------------------------

            // Slackware (Small)

            const SlackwarePS = document.getElementsByClassName('node--id278')[0];
            const SlackwareP2S = SlackwarePS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldSlackwareS = SlackwareP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newSlackwareS = baseElmS.cloneNode(true);
            newSlackwareS.src = chrome.runtime.getURL('icons/linux/slackware/18.png');
            SlackwareP2S.insertBefore(newSlackwareS, oldSlackwareS);

            // -----------------------------------------------------------------------

            // Pisi and Milis (Small)

            const PisiLinuxPS = document.getElementsByClassName('node--id265')[0];
            const PisiLinuxP2S = PisiLinuxPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldPisiLinuxS = PisiLinuxP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newPisiLinuxS = baseElmS.cloneNode(true);
            newPisiLinuxS.src = chrome.runtime.getURL('icons/linux/pisi-linux/18.png');
            PisiLinuxP2S.insertBefore(newPisiLinuxS, oldPisiLinuxS);

            // -----------------------------------------------------------------------

            // Other OS (AmogOS)

            const AmogOS_P = document.getElementsByClassName('node--id15')[0];
            const AmogOS_P2 = AmogOS_P.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldAmogOS_ = AmogOS_P2.getElementsByClassName('fa fas fa-folder-plus')[0];

            const newAmogOS_ = baseElmN.cloneNode(true);
            newAmogOS_.src = chrome.runtime.getURL("icons/amogos-34.png");
            AmogOS_P2.insertBefore(newAmogOS_, oldAmogOS_);
        }

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

            const newSonoma = baseElmN.cloneNode(true);
            newSonoma.src = chrome.runtime.getURL("icons/macos/sonoma/34.png");
            SonomaP2.insertBefore(newSonoma, oldSonoma);

            // -----------------------------------------------------------------------

            // Hackintosh - OpenCore

            const OpenCoreP = document.getElementsByClassName('node--id233')[0];
            const OpenCoreP2 = OpenCoreP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldOpenCore = OpenCoreP2.getElementsByClassName('fa fas fa-spinner')[0];

            const newOpenCore = baseElmN.cloneNode(true);
            newOpenCore.src = chrome.runtime.getURL("icons/macos/opencore/34.png");
            OpenCoreP2.insertBefore(newOpenCore, oldOpenCore);

            // -----------------------------------------------------------------------

            // macOS 13 Ventura

            const VenturaP = document.getElementsByClassName('node--id341')[0];
            const VenturaP2 = VenturaP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldVentura = VenturaP2.getElementsByClassName('fa fab fa-apple')[0];

            const newVentura = baseElmN.cloneNode(true);
            newVentura.src = chrome.runtime.getURL("icons/macos/ventura/34.png");
            VenturaP2.insertBefore(newVentura, oldVentura);

            // -----------------------------------------------------------------------

            // macOS 12 Monterey

            const MontereyP = document.getElementsByClassName('node--id307')[0];
            const MontereyP2 = MontereyP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldMonterey = MontereyP2.getElementsByClassName('fa fab fa-apple')[0];

            const newMonterey = baseElmN.cloneNode(true);
            newMonterey.src = chrome.runtime.getURL("icons/macos/monterey/34.png");
            MontereyP2.insertBefore(newMonterey, oldMonterey);

            // -----------------------------------------------------------------------

            // macOS 11 Big Sur

            const BigSurP = document.getElementsByClassName('node--id239')[0];
            const BigSurP2 = BigSurP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldBigSur = BigSurP2.getElementsByClassName('fa fab fa-apple')[0];

            const newBigSur = baseElmN.cloneNode(true);
            newBigSur.src = chrome.runtime.getURL("icons/macos/big-sur/34.png");
            BigSurP2.insertBefore(newBigSur, oldBigSur);

            // -----------------------------------------------------------------------

            // macOS 10.15 Catalina

            const CatalinaP = document.getElementsByClassName('node--id238')[0];
            const CatalinaP2 = CatalinaP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldCatalina = CatalinaP2.getElementsByClassName('fa fab fa-apple')[0];

            const newCatalina = baseElmN.cloneNode(true);
            newCatalina.src = chrome.runtime.getURL("icons/macos/catalina/34.png");
            CatalinaP2.insertBefore(newCatalina, oldCatalina);

            // -----------------------------------------------------------------------

            // macOS 10.14 Mojave

            const MojaveP = document.getElementsByClassName('node--id237')[0];
            const MojaveP2 = MojaveP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldMojave = MojaveP2.getElementsByClassName('fa fab fa-apple')[0];

            const newMojave = baseElmN.cloneNode(true);
            newMojave.src = chrome.runtime.getURL("icons/macos/mojave/34.png");
            MojaveP2.insertBefore(newMojave, oldMojave);

            // -----------------------------------------------------------------------

            // macOS 10.13 High Sierra

            const HighSierraP = document.getElementsByClassName('node--id236')[0];
            const HighSierraP2 = HighSierraP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldHighSierra = HighSierraP2.getElementsByClassName('fa fab fa-apple')[0];

            const newHighSierra = baseElmN.cloneNode(true);
            newHighSierra.src = chrome.runtime.getURL("icons/macos/h-sierra/34.png");
            HighSierraP2.insertBefore(newHighSierra, oldHighSierra);

            // -----------------------------------------------------------------------

            // macOS 10.12 Sierra

            const SierraP = document.getElementsByClassName('node--id235')[0];
            const SierraP2 = SierraP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldSierra = SierraP2.getElementsByClassName('fa fab fa-apple')[0];

            const newSierra = baseElmN.cloneNode(true);
            newSierra.src = chrome.runtime.getURL("icons/macos/sierra/34.png");
            SierraP2.insertBefore(newSierra, oldSierra);

            // -----------------------------------------------------------------------

            // macOS 10.11 El Capitan

            const CapitanP = document.getElementsByClassName('node--id234')[0];
            const CapitanP2 = CapitanP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldCapitan = CapitanP2.getElementsByClassName('fa fab fa-apple')[0];

            const newCapitan = baseElmN.cloneNode(true);
            newCapitan.src = chrome.runtime.getURL("icons/macos/el-capitan/34.png");
            CapitanP2.insertBefore(newCapitan, oldCapitan);
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

            const newDebian = baseElmN.cloneNode(true);
            newDebian.src = chrome.runtime.getURL("icons/linux/debian/34.png");
            DebianP2.insertBefore(newDebian, oldDebian);

            // -----------------------------------------------------------------------

            // Pardus

            const PardusP = document.getElementsByClassName('node--id14')[0];
            const PardusP2 = PardusP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldPardus = PardusP2.getElementsByClassName('fa fas fa-paw')[0];

            const newPardus = baseElmN.cloneNode(true);
            newPardus.src = chrome.runtime.getURL("icons/linux/pardus/34.png");
            PardusP2.insertBefore(newPardus, oldPardus);

            // -----------------------------------------------------------------------

            // Kali Linux

            const KaliLinuxP = document.getElementsByClassName('node--id277')[0];
            const KaliLinuxP2 = KaliLinuxP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldKaliLinux = KaliLinuxP2.getElementsByClassName('fa fab fa-linux')[0];

            const newKaliLinux = baseElmN.cloneNode(true);
            newKaliLinux.src = chrome.runtime.getURL("icons/linux/kali-linux/34.png");
            KaliLinuxP2.insertBefore(newKaliLinux, oldKaliLinux);

            // -----------------------------------------------------------------------

            // Ubuntu

            const UbuntuP = document.getElementsByClassName('node--id266')[0];
            const UbuntuP2 = UbuntuP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldUbuntu = UbuntuP2.getElementsByClassName('fa fab fa-ubuntu')[0];

            const newUbuntu = baseElmN.cloneNode(true);
            newUbuntu.src = chrome.runtime.getURL("icons/linux/ubuntu/34.png");
            UbuntuP2.insertBefore(newUbuntu, oldUbuntu);

            // -----------------------------------------------------------------------

            // Linux Mint

            const LinuxMintP = document.getElementsByClassName('node--id262')[0];
            const LinuxMintP2 = LinuxMintP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldLinuxMint = LinuxMintP2.getElementsByClassName('fa fab fa-linux')[0];

            const newLinuxMint = baseElmN.cloneNode(true);
            newLinuxMint.src = chrome.runtime.getURL("icons/linux/linux-mint/34.png");
            LinuxMintP2.insertBefore(newLinuxMint, oldLinuxMint);

            // -----------------------------------------------------------------------

            // Pop!_OS

            const PopOS_P = document.getElementsByClassName('node--id272')[0];
            const PopOS_P2 = PopOS_P.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldPopOS_ = PopOS_P2.getElementsByClassName('fa fas fa-parking')[0];

            const newPopOS_ = baseElmN.cloneNode(true);
            newPopOS_.src = chrome.runtime.getURL("icons/linux/pop-os/34.png");
            PopOS_P2.insertBefore(newPopOS_, oldPopOS_);

            // -----------------------------------------------------------------------

            // Elementary OS

            const ElementaryOS_P = document.getElementsByClassName('node--id271')[0];
            const ElementaryOS_P2 = ElementaryOS_P.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldElementaryOS_ = ElementaryOS_P2.getElementsByClassName('fa fab fa-linux')[0];

            const newElementaryOS_ = baseElmN.cloneNode(true);
            newElementaryOS_.src = chrome.runtime.getURL("icons/linux/elementary-os/34.png");
            ElementaryOS_P2.insertBefore(newElementaryOS_, oldElementaryOS_);

            // -----------------------------------------------------------------------

            // RedHat, CentOS and AlmaLinux

            const RedHatP = document.getElementsByClassName('node--id267')[0];
            const RedHatP2 = RedHatP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldRedHat = RedHatP2.getElementsByClassName('fa fab fa-redhat')[0];

            const newRedHat = baseElmN.cloneNode(true);
            newRedHat.src = chrome.runtime.getURL("icons/linux/redhat/34.png");
            RedHatP2.insertBefore(newRedHat, oldRedHat);

            // -----------------------------------------------------------------------

            // Fedora

            const FedoraP = document.getElementsByClassName('node--id268')[0];
            const FedoraP2 = FedoraP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldFedora = FedoraP2.getElementsByClassName('fa fab fa-fedora')[0];

            const newFedora = baseElmN.cloneNode(true);
            newFedora.src = chrome.runtime.getURL("icons/linux/fedora/34.png");
            FedoraP2.insertBefore(newFedora, oldFedora);

            // -----------------------------------------------------------------------

            // OpenSUSE

            const OpenSUSEP = document.getElementsByClassName('node--id270')[0];
            const OpenSUSEP2 = OpenSUSEP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldOpenSUSE = OpenSUSEP2.getElementsByClassName('fa fab fa-linux')[0];

            const newOpenSUSE = baseElmN.cloneNode(true);
            newOpenSUSE.src = chrome.runtime.getURL("icons/linux/opensuse/34.png");
            OpenSUSEP2.insertBefore(newOpenSUSE, oldOpenSUSE);

            // -----------------------------------------------------------------------

            // Arch Linux

            const ArchLinuxP = document.getElementsByClassName('node--id263')[0];
            const ArchLinuxP2 = ArchLinuxP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldArchLinux = ArchLinuxP2.getElementsByClassName('fa fab fa-linux')[0];

            const newArchLinux = baseElmN.cloneNode(true);
            newArchLinux.src = chrome.runtime.getURL("icons/linux/arch/34.png");
            ArchLinuxP2.insertBefore(newArchLinux, oldArchLinux);

            // -----------------------------------------------------------------------

            // Manjaro Linux

            const ManjaroLinuxP = document.getElementsByClassName('node--id274')[0];
            const ManjaroLinuxP2 = ManjaroLinuxP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldManjaroLinux = ManjaroLinuxP2.getElementsByClassName('fa fab fa-linux')[0];

            const newManjaroLinux = baseElmN.cloneNode(true);
            newManjaroLinux.src = chrome.runtime.getURL("icons/linux/manjaro/34.png");
            ManjaroLinuxP2.insertBefore(newManjaroLinux, oldManjaroLinux);

            // -----------------------------------------------------------------------

            // Gentoo

            const GentooP = document.getElementsByClassName('node--id276')[0];
            const GentooP2 = GentooP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldGentoo = GentooP2.getElementsByClassName('fa fab fa-linux')[0];

            const newGentoo = baseElmN.cloneNode(true);
            newGentoo.src = chrome.runtime.getURL("icons/linux/gentoo/34.png");
            GentooP2.insertBefore(newGentoo, oldGentoo);

            // -----------------------------------------------------------------------

            // Void Linux

            const VoidLinuxP = document.getElementsByClassName('node--id275')[0];
            const VoidLinuxP2 = VoidLinuxP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldVoidLinux = VoidLinuxP2.getElementsByClassName('fa fab fa-linux')[0];

            const newVoidLinux = baseElmN.cloneNode(true);
            newVoidLinux.src = chrome.runtime.getURL("icons/linux/void/34.png");
            VoidLinuxP2.insertBefore(newVoidLinux, oldVoidLinux);

            // -----------------------------------------------------------------------

            // Slackware

            const SlackwareP = document.getElementsByClassName('node--id278')[0];
            const SlackwareP2 = SlackwareP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldSlackware = SlackwareP2.getElementsByClassName('fa fab fa-linux')[0];

            const newSlackware = baseElmN.cloneNode(true);
            newSlackware.src = chrome.runtime.getURL("icons/linux/slackware/34.png");
            SlackwareP2.insertBefore(newSlackware, oldSlackware);

            // -----------------------------------------------------------------------

            // Pisi and Milis

            const PisiLinuxP = document.getElementsByClassName('node--id265')[0];
            const PisiLinuxP2 = PisiLinuxP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldPisiLinux = PisiLinuxP2.getElementsByClassName('fa fab fa-linux')[0];

            const newPisiLinux = baseElmN.cloneNode(true);
            newPisiLinux.src = chrome.runtime.getURL("icons/linux/pisi-linux/34.png");
            PisiLinuxP2.insertBefore(newPisiLinux, oldPisiLinux);
        }

    });
