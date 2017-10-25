// equilibrar titulo e bt de adição == 
// tooltip bt add formação e remover == 
// bt de finalização do inserção de formação  
// campo de preeenchimento atribuições == 
// remover dia da seleção de data == 
$(function(){
    var parte = 1;
    var confirmaArea = false;
    var area = "";
    var fa = 0;
    var xpp = 0;

    // ===========================FUNÇÕES===================================
    function proximo(p){
        $(".parte1, .parte2").removeClass("animated fadeOutLeftBig fadeInLeftBig fadeOutRightBig fadeInRightBig");
        if(p == 2){
            parte = p;
            $(".parte1").stop().hide();
            $(".parte2").stop().show();
        }else{
            parte = p;
            $(".parte1").stop().show();
            $(".parte2").stop().hide();
        }
    }

    function ativarData(){
	    $('.datepicker').mask("99/9999");
    }

    //  CEP
    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
        $("#ibge").val("");
    }

    function validaData(d){
        d = d.split("/");
        d = parseInt(d[0]);
        if(d > 12){
            return false;
        }else{
            return true;
        }
    }; 

    // ENVIO DO FORMULARIO

    function validaForm(){
        var vf = 0;
        var nome = $(".nome").val();
        var sobrenome = $(".sobrenome").val();
        var nomesobrenome = nome+ " " +sobrenome;
        var cep = $(".cep").val();
        var endereco = $(".endereco").val();
        var numero = $(".numero").val();
        var bairro = $(".bairro").val();
        var cidade = $(".cidade").val();
        var estado = $(".estado").val();
        var pais = $(".pais").val();
        var email = $(".email").val();
        var linkedin = $(".linkedin").val();
        var latts = $(".latts").val();
        var portifolio = $(".portifolio").val();
        var outroarea = $(".outro-area").val();
        var estagio = $('#estagio').prop('checked');
        
        // FORMAÇÃO ACADEMICA
        var curso = $(".curso");
        var universidade = $(".universidade");
        var dtinicioacademica = $(".dt-inicio-academica");
        var dtconclusaoacademica = $(".dt-conclusao-academica");

        // XP PROFISSIONAL
        var nomeempresa = $(".nome-empresa");
        var seguimento = $(".seguimento");
        var cargo = $(".cargo");
        var atribuicao = $(".atribuicao");
        var dtinicio = $(".dt-inicio");
        var dtfim = $(".dt-fim");

        if(nome == ""){
            Materialize.toast("Digite seu nome.", 2000, "red");
            vf = 1;
        }else if(sobrenome == ""){
            Materialize.toast("Digite seu sobrenome.", 2000, "red");
            vf = 1;
        }else if(cep == ""){
            Materialize.toast("Digite seu cep.", 2000, "red");
            vf = 1;
        }else if(endereco == ""){
            Materialize.toast("Digite seu endereço.", 2000, "red");
            vf = 1;
        }else if(numero == ""){
            Materialize.toast("Digite o número do seu endereço.", 2000, "red");
            vf = 1;
        }else if(bairro == ""){
            Materialize.toast("Digite seu bairro.", 2000, "red");
            vf = 1;
        }else if(cidade == ""){
            Materialize.toast("Digite seu cidade.", 2000, "red");
            vf = 1;
        }else if(estado == ""){
            Materialize.toast("Digite seu estado.", 2000, "red");
            vf = 1;
        }else if(pais == ""){
            Materialize.toast("Digite seu pais.", 2000, "red");
            vf = 1;
        }else if(email == ""){
            Materialize.toast("Digite seu email.", 2000, "red");
            vf = 1;
        }else if(confirmaArea == false){
            Materialize.toast("Informe sua área de atuação.", 2000, "red");
            vf = 1;
        }else if(area == "outra" && outroarea == ""){
            Materialize.toast("Digite sua área de atuação.", 2000, "red");
            vf = 1;
        };

        function validaformacademica(c){
            $.each(curso, function(i, v){
                if($(v).val() == ""){
                    Materialize.toast("Existem cursos não informados", 2000, "red");
                    vf = 1;
                }else{
                    vf = 0;
                }
            });

            $.each(universidade, function(i, v){
                if($(v).val() == ""){
                    Materialize.toast("Existem universidades não informadas", 2000, "red");
                    vf = 1;
                }else{
                    vf = 0;
                }
            });

            $.each(dtinicioacademica, function(i, v){
                vd = validaData($(v).val());
                if($(v).val() == ""){
                    Materialize.toast("Existem datas de inicio do curso não informadas", 2000, "red");
                    vf = 1;
                }else if(vd == false){
                    Materialize.toast("Periodo informado inválido", 2000, "red");
                    vf = 1;
                }else{
                    vf = 0;
                }
            });
        };

        function validaxpprofssional(){
                $.each(nomeempresa, function(i, v){
                    if($(v).val() == ""){
                        Materialize.toast("Existem empresas não informadas", 2000, "red");
                        vf = 1;
                    }else{
                        vf = 0;
                    }
                });

                $.each(seguimento, function(i, v){
                    if($(v).val() == ""){
                        Materialize.toast("Existem seguimentos não informadas", 2000, "red");
                        vf = 1;
                    }else{
                        vf = 0;
                    }
                });
                
                $.each(cargo, function(i, v){
                    if($(v).val() == ""){
                        Materialize.toast("Existem cargos não informadas", 2000, "red");
                        vf = 1;
                    }else{
                        vf = 0;
                    }
                });
                            
                $.each(atribuicao, function(i, v){
                    if($(v).val() == ""){
                        Materialize.toast("Existem atribuições não informadas", 2000, "red");
                        vf = 1;
                    }else{
                        vf = 0;
                    }
                });

                $.each(dtinicio, function(i, v){
                    vd = validaData($(v).val());
                    if($(v).val() == ""){
                        Materialize.toast("Existem datas de inicio do curso não informadas", 2000, "red");
                        vf = 1;
                    }else if(vd == false){
                        Materialize.toast("Periodo informado inválido", 2000, "red");
                        vf = 1;
                    }else{
                        vf = 0;
                    }
                });
            }
        
        
        if(curso.length != 0 && universidade.length != 0 && dtinicioacademica.length != 0){
            validaformacademica();
        }

        if(nomeempresa.length != 0 && seguimento.length != 0 && cargo.length != 0 && dtinicio.length != 0){
            validaxpprofssional();
        }
        
        if(vf == 0 && parte == 2){
            return true;
        }else{
            return false;
        }
    };

    // ===========================EVENTOS===================================
    $('.confirma-tooltipped').tooltip({delay: 50});
    $('.editarxpp-tooltipped').tooltip({delay: 50});
    $(".row > .proximo").click(function(){
        proximo(2);
    });

    $(".anterior").click(function(){
        proximo(1);
    });

    $("select").material_select();
    $(".tooltipped").tooltip({delay: 50});
    $(".btn-add-academica").click(function(){
        $(".formacao-academica-container").append(' <div class="row remover-academica'+fa+'"> <div class="input-field col l3 m12 s12"> <input id="curso'+fa+'" type="text" class="validate curso" name="curso'+fa+'"> <label for="curso'+fa+'"> Nome do curso </label> </div> <div class="input-field col l3 m12 s12"> <input id="universidade'+fa+'" type="text" class="validate universidade" name="universidade'+fa+'"> <label for="universidade'+fa+'"> Universidade </label> </div> <div class="input-field col l3 m12 s12"> <input id="dt-inicio-academica'+fa+'" type="text" class="dt-inicio-academica datepicker" name="dt-inicio-academica'+fa+'"> <label for="dt-inicio-academica"> Data de inicio </label> </div> <div class="input-field col l3 m12 s12"> <input id="dt-conclusao-academica'+fa+'" type="text" class="dt-conclusao-academica datepicker" name="dt-conclusao-academica'+fa+'"> <label for="dt-conclusao-academica'+fa+'"> Data de conclusão </label> </div> </div> <div class="row remover-academica'+fa+'"> <div class="white-text btn red btn-remover-academica waves-effect waves-light remover-tooltipped'+fa+'" id="remover-academica'+fa+'" data-position="top" data-delay="0" data-tooltip="Remover formação acadêmica"> <i class="material-icons center">delete</i> </div>  </div>');
        $(".btn-confirmar-academica").stop().show();
        $(".btn-editar-academica").stop().hide();
        $('.remover-tooltipped'+fa).tooltip({delay: 50});
        $(".btn-confirmar-academica").click(function(){
            $('.curso, .universidade, .dt-inicio-academica, .dt-conclusao-academica').css('cursor', 'not-allowed');
            $('.curso, .universidade, .dt-inicio-academica, .dt-conclusao-academica, div.btn-add-academica, div.btn-remover-academica').attr('disabled', 'disabled');
            $(".btn-editar-academica").stop().show();
            $(".btn-confirmar-academica").stop().hide();
            $(this).parent().data("confirmadoacademica", true);
        });
        $(".btn-editar-academica").click(function(){
            $('.curso, .universidade, .dt-inicio-academica, .dt-conclusao-academica').css('cursor', 'auto');
            $("div.btn-add-academica, div.btn-remover-academica").attr("disabled", false)
            $('.curso, .universidade, .dt-inicio-academica, .dt-conclusao-academica').attr('disabled', false);
            $(".btn-confirmar-academica").stop().show();
            $(".btn-editar-academica").stop().hide();
            $(this).parent().data("confirmadoacademica", false);
        });
        ativarData();
        var totalfa = $(".total-formacaoacademica").val();
        totalfa = parseInt(totalfa)+1
        $(".total-formacaoacademica").val(totalfa); 
        $(".btn-remover-academica").click(function(){
            var id = this.id;
            totalfa = totalfa-1
            $("#"+id).tooltip('remove');
            $(".total-formacaoacademica").val(totalfa); 
            $("."+id).remove();
            $("#"+id).remove();
        });
        fa++;
    });
    
    $(".btn-add-xp-profissional").click(function(){
        $(".xp-profissional-container").append('<div class="row remover-profissional'+xpp+'"> <div class="input-field col l4 m12 s12"> <input id="nome-empresa'+xpp+'" type="text" class="validate nome-empresa" name="nome-empresa'+xpp+'"> <label for="nome-empresa'+xpp+'"> Nome da empresa </label> </div> <div class="input-field col l4 m12 s12"> <input id="seguimento'+xpp+'" type="text" class="validate seguimento" name="seguimento'+xpp+'"> <label for="seguimento'+xpp+'"> Seguimento </label> </div> <div class="input-field col l4 m12 s12"> <input id="cargo'+xpp+'" type="text" class="validate cargo"name="cargo'+xpp+'"> <label for="cargo'+xpp+'"> Cargo </label> </div> </div> <div class="row remover-profissional'+xpp+'"> <div class="input-field col l4 m12 s12"> <input id="atribuicao'+xpp+'" type="text" class="validate atribuicao"name="atribuicao'+xpp+'"> <label for="atribuicao'+xpp+'"> Atribuição </label> </div> <div class="input-field col l4 m12 s12"> <input id="dt-inicio'+xpp+'" type="text" class="dt-inicio datepicker" name="dt-inicio'+xpp+'"> <label for="dt-inicio'+xpp+'"> Data de inicio </label> </div> <div class="input-field col l4 m12 s12"> <input id="dt-fim'+xpp+'" type="text" class="dt-fim datepicker" name="dt-fim'+xpp+'"> <label for="dt-fim'+xpp+'"> Data de fim </label> </div> </div> <div class="row remover-profissional'+xpp+'"> <div class="white-text btn red btn-remover-profissional waves-effect waves-light remover-xp-tooltipped'+xpp+'" id="remover-profissional'+xpp+'" data-position="top" data-delay="50" data-tooltip="Remover experiência profissional"> <i class="material-icons center">delete</i></div> </div>');        
        $(".btn-confirmar-xpprofissional").stop().show();
        $('.remover-xp-tooltipped'+xpp).tooltip({delay: 50});
        $(".btn-confirmar-xpprofissional").click(function(){
            $('.xp-profissional-container, .nome-empresa, .seguimento, .cargo, .atribuicao, .dt-inicio, .dt-fim').css('cursor', 'not-allowed');
            $('.nome-empresa, .seguimento, .cargo, .atribuicao, .dt-inicio, .dt-fim, div.btn-remover-profissional, div.btn-add-xp-profissional').attr('disabled', 'disabled');
            $(".btn-editar-xpprofissional").stop().show();
            $(".btn-confirmar-xpprofissional").stop().hide();
            $(this).parent().data("confirmadoxpp", true);
        });
        $(".btn-editar-xpprofissional").click(function(){
            $('.xp-profissional-container, .nome-empresa, .seguimento, .cargo, .atribuicao, .dt-inicio, .dt-fim, div.btn-remover-profissional, div.btn-add-xp-profissional').css('cursor', 'auto');
            $('.nome-empresa, .seguimento, .cargo, .atribuicao, .dt-inicio, .dt-fim, div.btn-add-xp-profissional, div.btn-remover-profissional').attr('disabled', false);
            $(".btn-confirmar-xpprofissional").stop().show();
            $(".btn-editar-xpprofissional").stop().hide();
            $(this).parent().data("confirmadoxpp", false);
        });
        ativarData();
        var totalxpp = $(".total-xpprofissional").val();
        totalxpp = parseInt(totalxpp)+1;
        $(".total-xpprofissional").val(totalxpp); 
        $(".btn-remover-profissional").click(function(){
            var id = this.id;
            totalxpp = totalxpp - 1;
            $("#"+id).tooltip('remove');
            $(".total-xpprofissional").val(totalxpp); 
            $("."+id).remove();
            $("#"+id).remove();
        });

        xpp++;
    });

    $("select.area").change(function(){
        area = $(this).val();
        confirmaArea = true;
        if(area === "outra"){
            $(".outra-area-input").stop().show();
            Materialize.toast("Informe essa outra area de atuação", 2000, "blue darken-4", function(){
                $(".outra-area-input > #outra-area").focus();
            });
        }else{
            $(".outra-area-input").stop().hide();
        }
    });
    
    //Quando o campo cep perde o foco.
    $("#cep").blur(function() {

        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;
            //Valida o formato do CEP.
            if(validacep.test(cep)) { 

                Materialize.toast("Procurando CEP aguarde...", 2000, "blue darken-4", function(){
                    $.getJSON("//viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
                        if (!("erro" in dados)) {
                            //Atualiza os campos com os valores da consulta.
                            $("#endereco").val(dados.logradouro);
                            $("#bairro").val(dados.bairro);
                            $("#cidade").val(dados.localidade);
                            $("#estado").val(dados.uf);
                            //$("#ibge").val(dados.ibge);
                            $("#endereco, #bairro, #cidade, #estado").focus();
                            $("#numero").focus();
                            Materialize.toast("CEP encontrado com sucesso.", 2000, "green");
                        } //end if.
                        else {
                            //CEP pesquisado não foi encontrado.
                            limpa_formulário_cep();
                            Materialize.toast("CEP não encontrado.", 2000, "red");
                        }
                    });
                });
                //Consulta o webservice viacep.com.br/
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                Materialize.toast("Formato de CEP inválido.", 2000, "red");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
    // Fim CEP

    $("#contact-form").submit(function(){
        var formvalido = validaForm();
        var cf = $(".btn-confirmar-academica").parent().data("confirmadoacademica");
        var cp = $(".btn-confirmar-xpprofissional").parent().data("confirmadoxpp");
        
        
        if(cf == false && $(".total-formacaoacademica").val() != "0"){
            Materialize.toast("Confirme sua formação acadêmica", 2000, "red");
            cf = false;
        }else{
            cf = true;
        }
        
        if(cp == false && $(".total-xpprofissional").val() != "0"){
            Materialize.toast("Confirme sua expêriencia profissional", 2000, "red");
            cp = false;
        }else{
            cp = true;
        }
        console.log(formvalido);
        if(formvalido == true && cf == true && cp == true){
            return true;
        }else{
            return false;
        }
    });
});
