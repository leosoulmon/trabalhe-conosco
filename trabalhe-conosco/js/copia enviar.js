$(function(){
    function validaData(d){
        d = d.split("/");
        d = parseInt(d[0]);
        if(d > 12){
            return true;
        }else{
            return false;
        }
    };

    $("#contact-form").submit(function(){
        var nome = $(".nome").val();
        var sobrenome = $(".sobrenome").val();
        var nomesobrenome = nome+ " " +sobrenome;
        var cep = $(".cep").val();
        var endereco = $(".endereco").val();
        var numero = $(".numero").val();
        // var complemento = $(".complemento").val();
        var bairro = $(".bairro").val();
        var cidade = $(".cidade").val();
        var estado = $(".estado").val();
        var pais = $(".pais").val();
        var email = $(".email").val();
        var linkedin = $(".linkedin").val();
        var latts = $(".latts").val();
        var portifolio = $(".portifolio").val();
        var area = $(".area").val();
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
        var dtinicio = $(".dt-inicio");
        var dtfim = $(".dt-fim");

        if(nome == ""){
            Materialize.toast("Digite seu nome.", 2000, "red");
            return false;
        }else if(sobrenome == ""){
            Materialize.toast("Digite seu sobrenome.", 2000, "red");
            return false;
        }else if(cep == ""){
            Materialize.toast("Digite seu cep.", 2000, "red");
            return false;
        }else if(endereco == ""){
            Materialize.toast("Digite seu endereço.", 2000, "red");
            return false;
        }else if(numero == ""){
            Materialize.toast("Digite o número do seu endereço.", 2000, "red");
            return false;
        }else if(bairro == ""){
            Materialize.toast("Digite seu bairro.", 2000, "red");
            return false;
        }else if(cidade == ""){
            Materialize.toast("Digite seu cidade.", 2000, "red");
            return false;
        }else if(estado == ""){
            Materialize.toast("Digite seu estado.", 2000, "red");
            return false;
        }else if(pais == ""){
            Materialize.toast("Digite seu pais.", 2000, "red");
            return false;
        }else if(email == ""){
            Materialize.toast("Digite seu email.", 2000, "red");
            return false;
        }else if(area == "0"){
            Materialize.toast("Informe sua área de atuação.", 2000, "red");
            return false;
        }else if(area == "outra" && outroarea == ""){
            Materialize.toast("Digite sua área de atuação.", 2000, "red");
            return false;
        }else if(curso.length != 0){
            $.each(curso, function(i, v){
                if($(v).val() == ""){
                    Materialize.toast("Existem cursos não informados", 2000, "red", function(){
                        return false;
                    });
                }
            });
        }else if(universidade.length != 0){
            $.each(universidade, function(i, v){
                if($(v).val() == ""){
                   Materialize.toast("Existem universidades não informadas", 2000, "red", function(){
                        return false;
                   });
                }
            });
        }else if(dtinicioacademica.length != 0){
            $.each(dtinicioacademica, function(i, v){
                vd = validaData($(v).val());
                if($(v).val() == ""){
                   Materialize.toast("Existem datas de inicio do curso não informadas", 2000, "red");
                   return false;
                }else if(vd == false){
                    Materialize.toast("Periodo informado inválido", 2000, "red");
                    return false;
                }
            });
        }else if(nomemepresa.length != 0){
            $.each(nomemepresa, function(i, v){
                if($(v).val() == ""){
                   Materialize.toast("Existem datas de inicio do curso não informadas", 2000, "red");
                   return false;
                }
            });
        }else if(seguimento.length != 0){
            $.each(seguimento, function(i, v){
                if($(v).val() == ""){
                   Materialize.toast("Existem datas de inicio do curso não informadas", 2000, "red");
                   return false;
                }
            });
        }else if(cargo.length != 0){
            $.each(cargo, function(i, v){
                if($(v).val() == ""){
                   Materialize.toast("Existem datas de inicio do curso não informadas", 2000, "red");
                   return false;
                }
            });
        }else if(dtinicio.length != 0){
            $.each(dtinicio, function(i, v){
                vd = validaData($(v).val());
                if($(v).val() == ""){
                   Materialize.toast("Existem datas de inicio do curso não informadas", 2000, "red");
                   return false;
                }else if(vd == false){
                    Materialize.toast("Periodo informado inválido", 2000, "red");
                    return false;
                }
            });
        }else{

            // $.post("classes/inserir.asp",
            // {
            //     nome: nome,
            //     cep: cep,
            //     endereco: endereco,
            //     numero: numero,
            //     complemento: complemento,
            //     bairro: bairro,
            //     cidade: cidade,
            //     estado: estado,
            //     pais: pais,
            //     email: email,
            //     linkedin: linkedin,
            //     latts: latts,
            //     portifolio: portifolio,
            //     area: area,
            //     estagio: estagio
            // },
            // function(data, status){
            //     if(status == "success"){
            //         Materialize.toast("Enviando...", 2000, "blue darken-4", function(){
            //             Materialize.toast("Currículo cadastrado com sucesso.", 2000, "green");
            //         });
            //     };
            // });
            return false;
        }
        
        
    });
});