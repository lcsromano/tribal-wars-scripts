/*
 * Script Name: Barbs Finder
 * Version: v2.0.1
 * Last Updated: 2023-05-11
 * Author: RedAlert
 * Author URL: https://twscripts.dev/
 * Author Contact: redalert_tw (Discord)
 * Approved: t13981993
 * Approved Date: 2020-05-27
 * Mod: JawJaw
 */

/*--------------------------------------------------------------------------------------
 * This script can NOT be cloned and modified without permission from the script author.
 --------------------------------------------------------------------------------------*/

// User Input
if (typeof DEBUG !== 'boolean') DEBUG = false;

// Script Config
var scriptConfig = {
    scriptData: {
        prefix: 'barbsFinder',
        name: 'Barbs Finder',
        version: 'v2.0.1',
        author: 'RedAlert',
        authorUrl: 'https://twscripts.dev/',
        helpLink:
            'https://forum.tribalwars.net/index.php?threads/barb-finder-with-filtering.285289/',
    },
    translations: {
        en_DK: {
            'Barbs Finder': 'Barbs Finder',
            'Min Points:': 'Min Points:',
            'Max Points:': 'Max Points:',
            'Radius:': 'Radius:',
            'Barbs found:': 'Barbs found:',
            'Coordinates:': 'Coordinates:',
            'Error while fetching "village.txt"!':
                'Error while fetching "village.txt"!',
            Coords: 'Coords',
            Points: 'Points',
            'Dist.': 'Dist.',
            Attack: 'Attack',
            Filter: 'Filter',
            Reset: 'Reset',
            'No barbarian villages found!': 'No barbarian villages found!',
            'Current Village:': 'Current Village:',
            'Sequential Scout Script:': 'Sequential Scout Script:',
            Help: 'Help',
            'There was an error!': 'There was an error!',
        },
        sk_SK: {
            'Barbs Finder': 'HÄ¾adaÄ barbariek',
            'Min Points:': 'Min bodov:',
            'Max Points:': 'Max bodov:',
            'Radius:': 'VzdialenosÅ¥:',
            'Barbs found:': 'NÃ¡jdenÃ© barbarky:',
            'Coordinates:': 'SÃºradnice:',
            'Error while fetching "village.txt"!':
                'Chyba pri naÄÃ­tanÃ­ "village.txt"!',
            Coords: 'SÃºradnice',
            Points: 'Body',
            'Dist.': 'Vzdial.',
            Attack: 'Ãštok',
            Filter: 'Filter',
            Reset: 'Reset',
            'No barbarian villages found!':
                'Neboli nÃ¡jdenÃ© Å¾iadne dediny barbarov!',
            'Current Village:': 'SÃºÄasnÃ¡ dedina:',
            'Sequential Scout Script:': 'Sequential Scout Script:',
            Help: 'Pomoc',
            'There was an error!': 'There was an error!',
        },
        fr_FR: {
            'Barbs Finder': 'Recherche de Barbares',
            'Min Points:': 'Points Min.:',
            'Max Points:': 'Points Max.:',
            'Radius:': 'Radius:',
            'Barbs found:': 'Barbs found:',
            'Coordinates:': 'Coordinates:',
            'Error while fetching "village.txt"!':
                'Error while fetching "village.txt"!',
            Coords: 'Coords',
            Points: 'Points',
            'Dist.': 'Dist.',
            Attack: 'Attaquer',
            Filter: 'Filtrer',
            Reset: 'RÃ©initialiser',
            'No barbarian villages found!': 'No barbarian villages found!',
            'Current Village:': 'Village Actuel:',
            'Sequential Scout Script:': 'Sequential Scout Script:',
            Help: 'Help',
            'There was an error!': 'There was an error!',
        },
        pt_PT: {
            'Barbs Finder': 'Procurador de BÃ¡rbaras',
            'Min Points:': 'Pontos mÃ­nimos:',
            'Max Points:': 'Pontos mÃ¡ximos:',
            'Radius:': 'Raio:',
            'Barbs found:': 'BÃ¡rbaras encontradas:',
            'Coordinates:': 'Coordenadas:',
            'Error while fetching "village.txt"!':
                'Erro ao procurar "village.txt"!',
            Coords: 'Coords',
            Points: 'Pontos',
            'Dist.': 'Dist.',
            Attack: 'Attack',
            Filter: 'Filtro',
            Reset: 'Reset',
            'No barbarian villages found!': 'NÃ£o foram encontradas bÃ¡rbaras!',
            'Current Village:': 'Aldeia Atual:',
            'Sequential Scout Script:': 'Sequential Scout Script:',
            Help: 'Ajuda',
            'There was an error!': 'There was an error!',
        },
        pt_BR: {
            'Barbs Finder': 'Procurador de BÃ¡rbaras',
            'Min Points:': 'Pontos mÃ­nimos:',
            'Max Points:': 'Pontos mÃ¡ximos:',
            'Radius:': 'Campo:',
            'Barbs found:': 'BÃ¡rbaras encontradas:',
            'Coordinates:': 'Coordenadas:',
            'Error while fetching "village.txt"!':
                'Erro ao procurar "village.txt"!',
            Coords: 'Coords',
            Points: 'Pontos',
            'Dist.': 'Dist.',
            Attack: 'Attack',
            Filter: 'Filtro',
            Reset: 'Reset',
            'No barbarian villages found!': 'NÃ£o foram encontradas bÃ¡rbaras!',
            'Current Village:': 'Aldeia Atual:',
            'Sequential Scout Script:': 'Sequential Scout Script:',
            Help: 'Ajuda',
            'There was an error!': 'There was an error!',
        },
        hu_HU: {
            'Barbs Finder': 'Barbi keresÅ‘',
            'Min Points:': 'Min pontszÃ¡m:',
            'Max Points:': 'Max pontszÃ¡m:',
            'Radius:': 'HatÃ³kÃ¶r:',
            'Barbs found:': 'MegtalÃ¡lt barbik:',
            'Coordinates:': 'KoordinÃ¡tÃ¡k:',
            'Error while fetching "village.txt"!':
                'Hiba a "village.txt" beolvasÃ¡sa sorÃ¡n!',
            Coords: 'KoordinÃ¡tÃ¡k',
            Points: 'PontszÃ¡m',
            'Dist.': 'TÃ¡volsÃ¡g',
            Attack: 'TÃ¡madÃ¡s',
            Filter: 'SzÅ±rÃ©s',
            Reset: 'Reset',
            'No barbarian villages found!': 'Nem talÃ¡ltam barbit!',
            'Current Village:': 'Jelenlegi falu:',
            'Sequential Scout Script:': 'Teljes script a kikÃ©mlelÃ©shez:',
            Help: 'SegÃ­tsÃ©g',
            'There was an error!': 'There was an error!',
        },
        hr_HR: {
            'Barbs Finder': 'Barbari Koordinati',
            'Min Points:': 'Minimalno Poena:',
            'Max Points:': 'Maksimalno Poena:',
            'Radius:': 'Radius:',
            'Barbs found:': 'Barbara pronaÄ‘eno:',
            'Coordinates:': 'Koordinati:',
            'Error while fetching "village.txt"!':
                'GreÅ¡ka u dohvaÄ‡anju podataka "village.txt"!',
            Coords: 'Koordinati',
            Points: 'Poeni',
            'Dist.': 'Distanca.',
            Attack: 'Napad',
            Filter: 'Filter',
            Reset: 'Reset',
            'No barbarian villages found!': 'Nisu pronaÄ‘ena barbarska sela!',
            'Current Village:': 'Trenutno Selo:',
            'Sequential Scout Script:': 'Sekvencijalna izviÄ‘aÄka skripta:',
            Help: 'PomoÄ‡',
            'There was an error!': 'There was an error!',
        },
        pl_PL: {
            'Barbs Finder': 'Znajdz wioski opuszczone',
            'Min Points:': 'Minimalna iloÅ›Ä‡ punktÃ³w:',
            'Max Points:': 'Maksymalna iloÅ›Ä‡ punktÃ³w:',
            'Radius:': 'PromieÅ„:',
            'Barbs found:': 'Znaleziono wiosek:',
            'Coordinates:': 'Kordynaty:',
            'Error while fetching "village.txt"!':
                'BÅ‚Ä…d podczas wyszukiwania plikuâ€ž village.txt â€!',
            Coords: 'Koordy',
            Points: 'Punkty',
            'Dist.': 'OdlegÅ‚oÅ›Ä‡',
            Attack: 'Atak',
            Filter: 'ZnajdÅº',
            Reset: 'Reset',
            'No barbarian villages found!':
                'Nie znaleziono wiosek barbarzyÅ„skich',
            'Current Village:': 'Obecna wioska:',
            'Sequential Scout Script:': 'Sequential Scout Script:',
            Help: 'Pomoc',
            'There was an error!': 'There was an error!',
        },
        sv_SE: {
            'Barbs Finder': 'Hitta Barbarby',
            'Min Points:': 'Min PoÃ¤ng:',
            'Max Points:': 'Max PoÃ¤ng:',
            'Radius:': 'Radius:',
            'Barbs found:': 'Barbarby hittade:',
            'Coordinates:': 'Koordinater:',
            'Error while fetching "village.txt"!':
                'Fel vid hÃ¤mtning av "village.txtâ€!',
            Coords: 'Kords',
            Points: 'PoÃ¤ng',
            'Dist.': 'AvstÃ¥nd',
            Attack: 'Attackera',
            Filter: 'Filter',
            Reset: 'Ã…terstÃ¤ll',
            'No barbarian villages found!': 'Inga barbarbyar hittade!',
            'Current Village:': 'Nuvarande by:',
            'Sequential Scout Script:': 'Sequential Scout Script:',
            Help: 'HjÃ¤lp',
            'There was an error!': 'There was an error!',
        },
        tr_TR: {
            'Barbs Finder': 'Barbar Bulucu',
            'Min Points:': 'Minimum Puan:',
            'Max Points:': 'Maksimum Puan:',
            'Radius:': 'Alan:',
            'Barbs found:': 'Bulunan barbarlar:',
            'Coordinates:': 'Koordinatlar:',
            'Error while fetching "village.txt"!':
                'Arama hatasÄ± oluÅŸtu "village.txt"!',
            Coords: 'Koordinatlar',
            Points: 'Puanlar',
            'Dist.': 'UzaklÄ±k',
            Attack: 'SaldÄ±r',
            Filter: 'Filtre',
            Reset: 'Reset',
            'No barbarian villages found!': 'Barbar bulunamadÄ±!',
            'Current Village:': 'GeÃ§erli KÃ¶y',
            'Sequential Scout Script:': 'SÄ±ralÄ± Casus Scripti',
            Help: 'YardÄ±m',
            'There was an error!': 'There was an error!',
        },
        cs_CZ: {
            'Barbs Finder': 'Barbs Finder',
            'Min Points:': 'Min body:',
            'Max Points:': 'Max body:',
            'Radius:': 'Radius:',
            'Barbs found:': 'NalezenÃ© barbarskÃ© vesnice:',
            'Coordinates:': 'SouÅ™adnice:',
            'Error while fetching "village.txt"!':
                'Error while fetching "village.txt"!',
            Coords: 'SouÅ™adnice',
            Points: 'Body',
            'Dist.': 'VzdÃ¡lenost',
            Attack: 'Ãštok',
            Filter: 'Filter',
            Reset: 'Reset',
            'No barbarian villages found!':
                'Å½Ã¡dnÃ© barbarskÃ© vesnice nenalezeny!',
            'Current Village:': 'AktuÃ¡lnÃ­ vesnice:',
            'Sequential Scout Script:': 'Skript na Å¡pehy:',
            Help: 'Pomoc',
            'There was an error!': 'There was an error!',
        },
    },
    allowedMarkets: [],
    allowedScreens: [],
    allowedModes: [],
    isDebug: DEBUG,
    enableCountApi: true,
};

$.getScript(
    `https://twscripts.dev/scripts/twSDK.js?url=${document.currentScript.src}`,
    async function () {
        // Initialize Library
        await twSDK.init(scriptConfig);
        const scriptInfo = twSDK.scriptInfo();

        const { villages } = await fetchWorldData();

        // Entry point
        try {
            // build user interface
            buildUI();

            // register action handler
            handleFilterBarbs();
            handleResetFilters();
        } catch (error) {
            UI.ErrorMessage(twSDK.tt('There was an error!'));
            console.error(`${scriptInfo} Error:`, error);
        }

        // Render: Build the user interface
        function buildUI() {
            const content = `
                <div class="ra-grid ra-grid-4">
                    <div class="ra-mb15">
                        <label for="raCurrentVillage" class="ra-label">${twSDK.tt(
                            'Current Village:'
                        )}</label>
                        <input type="text" id="raCurrentVillage" value="${
                            game_data.village.coord
                        }" class="ra-input">
                    </div>
                    <div class="ra-mb15">
                        <label for="radius" class="ra-label">${twSDK.tt(
                            'Radius:'
                        )}</label>
                        <select id="radius_choser" class="ra-input">
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50" selected>50</option>
                            <option value="60">60</option>
                            <option value="70">70</option>
                            <option value="80">80</option>
                            <option value="90">90</option>
                            <option value="100">100</option>
                            <option value="110">110</option>
                            <option value="120">120</option>
                            <option value="130">130</option>
                            <option value="140">140</option>
                            <option value="150">150</option>
                            <option value="999">999</option>
                        </select>
                    </div>
                    <div class="ra-mb15">
                        <label for="minPoints" class="ra-label">${twSDK.tt(
                            'Min Points:'
                        )}</label>
                        <input type="text" id="minPoints" value="26" class="ra-input">
                    </div>
                    <div class="ra-mb15">
                        <label for="maxPoints" class="ra-label">${twSDK.tt(
                            'Max Points:'
                        )}</label>
                        <input type="text" id="maxPoints" value="12154" class="ra-input">
                    </div>
                </div>
                <div class="ra-mb15">
                    <a href="javascript:void(0);" id="btnFilterBarbs" class="btn btn-confirm-yes">
                        ${twSDK.tt('Filter')}
                    </a>
                    <a href="javascript:void(0);" id="btnResetFilters" class="btn btn-confirm-no">
                        ${twSDK.tt('Reset')}
                    </a>
                </div>
                <div class="ra-mb15">
                    <strong>${twSDK.tt('Barbs found:')}</strong>
                    <span id="barbsCount">0</span>
                </div>
                <div class="ra-grid ra-grid-2">
                    <div>
                        <label for="barbCoordsList" class="ra-label">${twSDK.tt(
                            'Coordinates:'
                        )}</label>
                        <textarea id="barbCoordsList" class="ra-textarea" readonly></textarea>
                    </div>
                    <div>
                        <label for="barbScoutScript" class="ra-label">${twSDK.tt(
                            'Sequential Scout Script:'
                        )}</label>
                        <textarea id="barbScoutScript" class="ra-textarea" readonly></textarea>
                    </div>
                </div>
                <div id="barbariansTable" style="display:none;" class="ra-table-container ra-mt15"></div>
            `;

            const customStyle = `
                .ra-label { display: block; font-weight: 600; margin-bottom: 5px; }
                .ra-input { padding: 5px; width: 100%; display: block; line-height: 1; font-size: 14px; }
                .ra-grid { display: grid; gap: 15px; }
                .ra-grid-2 { grid-template-columns: 1fr 1fr; }
                .ra-grid-4 { grid-template-columns: 1fr 1fr 1fr 1fr; }
                .btn-already-sent { padding: 3px; }
                .already-sent-command { opacity: 0.6; }
            `;

            twSDK.renderBoxWidget(
                content,
                scriptConfig.scriptData.prefix,
                'ra-barbs-finder',
                customStyle
            );
        }

        // Action Handler: Handle filter barbs event
        function handleFilterBarbs() {
            jQuery('#btnFilterBarbs').on('click', function (e) {
                e.preventDefault();

                const currentVillage = $('#raCurrentVillage').val().trim();
                const minPoints = parseInt($('#minPoints').val().trim());
                const maxPoints = parseInt($('#maxPoints').val().trim());
                const radius = parseInt($('#radius_choser').val());

                const barbarians = villages.filter(
                    (village) => parseInt(village[4]) === 0
                );

                // Filter by min and max points
                const filteredBarbs = barbarians.filter((barbarian) => {
                    return (
                        parseInt(barbarian[5]) >= minPoints &&
                        parseInt(barbarian[5]) <= maxPoints
                    );
                });

                // Filter by radius
                const filteredByRadiusBarbs = filteredBarbs.filter(
                    (barbarian) => {
                        let barbCoord = barbarian[2] + '|' + barbarian[3];
                        let distance = twSDK.calculateDistance(
                            currentVillage,
                            barbCoord
                        );
                        if (distance <= radius) {
                            return barbarian;
                        }
                    }
                );

                if (filteredByRadiusBarbs.length > 0) {
                    let barbariansCoordsArray = filteredByRadiusBarbs.map(
                        (village) => village[2] + '|' + village[3]
                    );
                    let barbariansCount = barbariansCoordsArray.length;
                    let barbariansCoordsList = barbariansCoordsArray.join(' ');
                    let scoutScript = `javascript:coords='${barbariansCoordsList}';var doc=document;if(window.frames.length>0 && window.main!=null)doc=window.main.document;url=doc.URL;if(url.indexOf('screen=place')==-1)alert('Use the script in the rally point page!');coords=coords.split(' ');index=0;farmcookie=document.cookie.match('(^|;) ?farm=([^;]*)(;|$)');if(farmcookie!=null)index=parseInt(farmcookie[2]);if(index>=coords.length)alert('All villages were extracted, now start from the first!');if(index>=coords.length)index=0;coords=coords[index];coords=coords.split('|');index=index+1;cookie_date=new Date(2030,1,1);document.cookie ='farm='+index+';expires='+cookie_date.toGMTString();doc.forms[0].x.value=coords[0];doc.forms[0].y.value=coords[1];$('#place_target').find('input').val(coords[0]+'|'+coords[1]);doc.forms[0].light.value=3;`;
                    let tableContent = generateBarbariansTable(
                        filteredByRadiusBarbs,
                        currentVillage
                    );

                    jQuery('#barbsCount').text(barbariansCount);
                    jQuery('#barbCoordsList').text(barbariansCoordsList);
                    jQuery('#barbScoutScript').val(scoutScript);
                    jQuery('#barbariansTable').show();
                    jQuery('#barbariansTable').html(tableContent);

                    jQuery('.btn-send-attack').on('click', function (e) {
                        jQuery(this).addClass(
                            'btn-confirm-yes btn-already-sent'
                        );
                        jQuery(this)
                            .parent()
                            .parent()
                            .addClass('already-sent-command');
                    });
                } else {
                    jQuery('#btnResetFilters').trigger('click');
                    UI.InfoMessage(twSDK.tt('No barbarian villages found!'));
                }
            });
        }

        // Action Handler: Handle reset Filters
        function handleResetFilters() {
            jQuery('#btnResetFilters').on('click', function (e) {
                e.preventDefault();

                jQuery('#raCurrentVillage').val(game_data.village.coord);
                jQuery('#minPoints').val(26);
                jQuery('#maxPoints').val(12154);
                jQuery('#radius_choser').val('20');
                jQuery('#barbsCount').text('0');
                jQuery('#barbCoordsList').text('');
                jQuery('#barbScoutScript').val('');
                jQuery('#barbariansTable').hide();
                jQuery('#barbariansTable').html('');
            });
        }

        // Generate Table
        function generateBarbariansTable(barbs, currentVillage) {
            if (barbs.length < 1) return;

            let barbariansWithDistance = [];

            barbs.forEach((barb) => {
                let barbCoord = barb[2] + '|' + barb[3];
                let distance = twSDK.calculateDistance(
                    currentVillage,
                    barbCoord
                );
                barbariansWithDistance.push([...barb, distance]);
            });

            barbariansWithDistance.sort((a, b) => {
                return a[7] - b[7];
            });

            let tableRows = generateTableRows(barbariansWithDistance);

            let tableContent = `
                <table class="vis overview_table ra-table" width="100%">
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                K
                            </th>
                            <th>
                                ${twSDK.tt('Coords')}
                            </th>
                            <th>
                                ${twSDK.tt('Points')}
                            </td>
                            <th>
                                ${twSDK.tt('Dist.')}
                            </th>
                            <th>
                                ${twSDK.tt('Attack')}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                </table>
            `;

            return tableContent;
        }

        // Generate Table Rows
        function generateTableRows(barbs) {
            let renderTableRows = '';

            barbs.forEach((barb, index) => {
                index++;
                let continent = barb[3].charAt(0) + barb[2].charAt(0);
                renderTableRows += `
                    <tr>
                        <td class="ra-tac">
                            ${index}
                        </td>
                        <td class="ra-tac">
                            ${continent}
                        </td>
                        <td class="ra-tac">
                            <a href="game.php?screen=info_village&id=${
                                barb[0]
                            }" target="_blank" rel="noopener noreferrer">
                                ${barb[2]}|${barb[3]}
                            </a>
                        </td>
                        <td>${twSDK.formatAsNumber(barb[5])}</td>
                        <td class="ra-tac">${barb[7].toFixed(2)}</td>
                        <td class="ra-tac">
                            <a href="/game.php?screen=place&target=${
                                barb[0]
                            }&light=3" target="_blank" rel="noopener noreferrer" class="btn btn-send-attack">
                                ${twSDK.tt('Attack')}
                            </a>
                        </td>
                    </tr>
                `;
            });

            return renderTableRows;
        }

        // Helper: Fetch all required world data
        async function fetchWorldData() {
            try {
                const villages = await twSDK.worldDataAPI('village');
                return { villages };
            } catch (error) {
                UI.ErrorMessage(error);
                console.error(`${scriptInfo} Error:`, error);
            }
        }
    }
);
