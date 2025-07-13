// Tribal Wars Scavenging Script
// Versão otimizada para GitHub Pages
// Baseado nos scripts aprovados da comunidade

(function() {
    'use strict';
    
    // Verificações iniciais
    if (!window.location.href.includes('screen=place') || !window.location.href.includes('mode=scavenge')) {
        UI.ErrorMessage('Execute este script na página de Coleta!', 4000);
        return;
    }
    
    if (typeof $ === 'undefined') {
        UI.ErrorMessage('jQuery não encontrado!', 4000);
        return;
    }
    
    // Configurações
    var config = {
        version: '2.0.0',
        premiumEnabled: window.premiumBtnEnabled || false,
        delay: 500 // delay entre envios em ms
    };
    
    // Função principal do script
    var ScavengeHelper = {
        
        init: function() {
            this.createUI();
            this.bindEvents();
            UI.SuccessMessage('Script de Coleta carregado! v' + config.version, 3000);
        },
        
        createUI: function() {
            // Remove interface anterior se existir
            $('#scavenge-helper').remove();
            
            var html = `
                <div id="scavenge-helper" style="
                    position: fixed;
                    top: 80px;
                    right: 20px;
                    background: linear-gradient(135deg, #f4e4bc 0%, #e8d5a3 100%);
                    border: 3px solid #7d510f;
                    border-radius: 8px;
                    padding: 15px;
                    z-index: 10000;
                    min-width: 280px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                    font-family: 'Trebuchet MS', Arial, sans-serif;
                    font-size: 12px;
                ">
                    <div style="
                        font-weight: bold; 
                        margin-bottom: 12px; 
                        color: #7d510f;
                        text-align: center;
                        font-size: 14px;
                        text-shadow: 1px 1px 2px rgba(255,255,255,0.8);
                    ">
                        ⚔️ Assistente de Coleta v${config.version}
                    </div>
                    
                    <div style="margin-bottom: 12px; background: rgba(255,255,255,0.6); padding: 8px; border-radius: 4px;">
                        <div style="font-weight: bold; margin-bottom: 6px; color: #5a3a0f;">Opções de Coleta:</div>
                        <label style="display: block; margin: 4px 0; cursor: pointer;">
                            <input type="checkbox" id="scav-opt-1" checked style="margin-right: 6px;"> 
                            <span style="color: #2d5016;">🟢 Pequena (Rápida)</span>
                        </label>
                        <label style="display: block; margin: 4px 0; cursor: pointer;">
                            <input type="checkbox" id="scav-opt-2" checked style="margin-right: 6px;"> 
                            <span style="color: #7d5f00;">🟡 Média (Equilibrada)</span>
                        </label>
                        <label style="display: block; margin: 4px 0; cursor: pointer;">
                            <input type="checkbox" id="scav-opt-3" checked style="margin-right: 6px;"> 
                            <span style="color: #8b4513;">🟠 Grande (Lucrativa)</span>
                        </label>
                        <label style="display: block; margin: 4px 0; cursor: pointer;">
                            <input type="checkbox" id="scav-opt-4" ${config.premiumEnabled ? 'checked' : ''} style="margin-right: 6px;"> 
                            <span style="color: #8b0000;">🔴 Máxima (Premium)</span>
                        </label>
                    </div>
                    
                    <div style="text-align: center; margin-bottom: 10px;">
                        <button id="start-scav" style="
                            background: linear-gradient(135deg, #7d510f 0%, #5a3a0f 100%);
                            color: white;
                            border: none;
                            padding: 10px 20px;
                            border-radius: 5px;
                            cursor: pointer;
                            font-weight: bold;
                            font-size: 12px;
                            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
                            transition: all 0.2s;
                        " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                            🚀 Iniciar Coleta
                        </button>
                    </div>
                    
                    <div style="text-align: center;">
                        <button id="close-scav" style="
                            background: #999;
                            color: white;
                            border: none;
                            padding: 6px 12px;
                            border-radius: 3px;
                            cursor: pointer;
                            font-size: 11px;
                        ">✖ Fechar</button>
                    </div>
                    
                    <div style="
                        font-size: 10px; 
                        color: #666; 
                        margin-top: 8px; 
                        text-align: center;
                        background: rgba(255,255,255,0.4);
                        padding: 4px;
                        border-radius: 3px;
                    ">
                        Premium: ${config.premiumEnabled ? '✅ Ativo' : '❌ Inativo'}
                    </div>
                </div>
            `;
            
            $('body').append(html);
        },
        
        bindEvents: function() {
            var self = this;
            
            $('#start-scav').click(function() {
                self.executeScavenging();
            });
            
            $('#close-scav').click(function() {
                $('#scavenge-helper').fadeOut(300, function() {
                    $(this).remove();
                });
            });
            
            // Tornar a interface arrastável
            this.makeDraggable();
        },
        
        makeDraggable: function() {
            var $helper = $('#scavenge-helper');
            var isDragging = false;
            var startX, startY, initialX, initialY;
            
            $helper.on('mousedown', function(e) {
                if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT') return;
                isDragging = true;
                startX = e.clientX;
                startY = e.clientY;
                initialX = parseInt($helper.css('right'));
                initialY = parseInt($helper.css('top'));
                $helper.css('cursor', 'move');
            });
            
            $(document).on('mousemove', function(e) {
                if (!isDragging) return;
                var deltaX = startX - e.clientX;
                var deltaY = e.clientY - startY;
                $helper.css({
                    'right': (initialX + deltaX) + 'px',
                    'top': (initialY + deltaY) + 'px'
                });
            });
            
            $(document).on('mouseup', function() {
                isDragging = false;
                $helper.css('cursor', 'default');
            });
        },
        
        executeScavenging: function() {
            var selectedOptions = [];
            
            // Verificar opções selecionadas
            for (var i = 1; i <= 4; i++) {
                if ($('#scav-opt-' + i).is(':checked')) {
                    selectedOptions.push(i);
                }
            }
            
            if (selectedOptions.length === 0) {
                UI.ErrorMessage('Selecione pelo menos uma opção!', 3000);
                return;
            }
            
            // Verificar se opção 4 está selecionada sem premium
            if (selectedOptions.includes(4) && !config.premiumEnabled) {
                UI.InfoMessage('Opção 4 requer Premium Account!', 3000);
                selectedOptions = selectedOptions.filter(opt => opt !== 4);
            }
            
            if (selectedOptions.length === 0) {
                UI.ErrorMessage('Nenhuma opção válida selecionada!', 3000);
                return;
            }
            
            UI.InfoMessage('Iniciando coleta em ' + selectedOptions.length + ' opções...', 2000);
            
            // Executar coleta com delay
            selectedOptions.forEach((option, index) => {
                setTimeout(() => {
                    this.sendScavenging(option);
                }, index * config.delay);
            });
        },
        
        sendScavenging: function(option) {
            try {
                // Procurar botão da opção específica
                var $button = $('a[data-option="' + option + '"]');
                
                if ($button.length === 0) {
                    // Fallback: procurar por outros seletores possíveis
                    $button = $('.scavenge-option:eq(' + (option - 1) + ') a');
                }
                
                if ($button.length > 0 && !$button.hasClass('btn-disabled')) {
                    $button[0].click();
                    UI.SuccessMessage('Coleta ' + option + ' enviada! ✅', 2000);
                } else {
                    UI.ErrorMessage('Opção ' + option + ' não disponível! ❌', 2000);
                }
            } catch (error) {
                console.error('Erro ao enviar coleta:', error);
                UI.ErrorMessage('Erro na opção ' + option + '!', 2000);
            }
        }
    };
    
    // Auto-executar quando o DOM estiver pronto
    $(document).ready(function() {
        // Pequeno delay para garantir que a página carregou completamente
        setTimeout(function() {
            ScavengeHelper.init();
        }, 100);
    });
    
    // Exportar para debug (opcional)
    window.ScavengeHelper = ScavengeHelper;
    
})();

