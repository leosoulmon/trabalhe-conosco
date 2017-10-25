<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Trabalhe Conosco</title>
    <!-- CSS -->
    <link href="libs/materialize/css/materialize.min.css" rel="stylesheet" media="screen,print">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="css/animate.css" rel="stylesheet">
    <link href="css/css.css" rel="stylesheet">
    <!-- JS -->
    <script src="https://use.fontawesome.com/6a6867f07c.js"></script>
    <script src="libs/jquery.js"></script>
    <script src="libs/mascara.js"></script>
    <script type="text/javascript" src="libs/materialize/js/materialize.js"></script>
    <script src="js/init.js"></script>
</head>
<body>
    <header>
        <nav class="menu-container blue darken-4">
            <div class="nav-wrapper">
              <a href="#" class="brand-logo">
                <img src="img/logo_top.png" class="img-logo">
              </a>
              <ul class="menu right">
                  <li>
                    <a href="/" class="btn-menu" data-activates="slide-out">
                        <i class="material-icons">arrow_back</i>
                    </a>
                  </li>
              </ul>
            </div>
          </nav>
    </header>
    <main class="container">
        <h1 class="blue-text page-title">Trabalhe Conosco</h1>
        <div class="row row-breadcrumb">
            <span class="anterior">
                <a class="orange-text crumbs">Parte 1</a>
            </span>
            <span class="parte2">
                <i class="material-icons orange-text crumbs-icon">keyboard_arrow_right</i>
                <a class="orange-text crumbs"> Fim </a>
            </span>
        </div>
        <div class="parte1">
            <form class="contact-form" id="contact-form" action="classes/inserir.asp" method="post" accept-charset="ISO-8859-1">
                <div class="row">
                    <div class="input-field col l6 m12 s12">
                        <input id="nome" type="text" class="validate nome" name="nome">
                        <label for="nome">Nome</label>
                    </div>
                    <div class="input-field col l6 m12 s12">
                        <input id="sobrenome" type="text" class="validate sobrenome" name="sobrenome">
                        <label for="sobrenome">Sobrenome</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col l3 m12 s12">
                        <input id="cep" type="number" class="validate cep tooltipped" name="cep" data-position="top" data-delay="50" data-tooltip="Digite o cep sem hifen ou ponto">
                        <label for="cep">CEP</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col l6 m12 s12">
                        <input id="endereco" type="text" class="validate endereco" name="endereco">
                        <label for="endereco">Endereço</label>
                    </div>
                    <div class="input-field col l3 m12 s12">
                        <input id="numero" type="number" class="validate numero" maxlength="9" name="numero">
                        <label for="numero">Nº</label>
                    </div>
                    <div class="input-field col l3 m12 s12">
                        <input id="complemento" type="text" class="validate complemento" name="complemento">
                        <label for="complemento">Complemento</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col l3 m12 s12">
                        <input id="bairro" type="text" class="validate bairro" name="bairro">
                        <label for="bairro">Bairro</label>
                    </div>
                    <div class="input-field col l3 m12 s12">
                        <input id="cidade" type="text" class="validate cidade" name="cidade">
                        <label for="cidade">Cidade</label>
                    </div>
                    <div class="input-field col l3 m12 s12">
                        <input id="estado" type="text" class="validate estado" name="estado">
                        <label for="estado">Estado</label>
                    </div>
                    <div class="input-field col l3 m12 s12">
                        <input id="pais" type="text" class="validate pais" name="pais">
                        <label for="pais">Pais</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col l3 m12 s12">
                        <input id="email" type="email" class="validate email" name="email">
                        <label for="email">Email</label>
                    </div>
                    <div class="input-field col l3 m12 s12">
                        <input id="linkedin" type="url" class="validate linkedin" name="linkedin">
                        <label for="linkedin">Linkedin</label>
                    </div>
                    <div class="input-field col l3 m12 s12">
                        <input id="latts" type="url" class="validate latts" name="latts">
                        <label for="latts">Currículo LATTS</label>
                    </div>
                    <div class="input-field col l3 m12 s12">
                        <input id="portfolio" type="url" class="validate portfolio" name="portfolio">
                        <label for="portfolio">Portfólio</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col l6 m12 s12">
                        <select class="area" name="area">
                            <option value="0" disabled selected> Escolha sua Área </option>
                            <option value="Administrativo">Administrativo</option>
                            <option value="Ciências exatas">Ciências exatas</option>
                            <option value="Ciências humanas">Ciências humanas</option>
                            <option value="Ciências naturais">Ciências naturais</option>
                            <option value="Comunicação">Comunicação</option>
                            <option value="Corretor de redação">Corretor de redação</option>
                            <option value="Educação Física">Educação Física</option>
                            <option value="">Inspetor de alunos</option>
                            <option value="Inspetor de alunos">Língua Estrangeira</option>
                            <option value="Língua Portuguesa">Língua Portuguesa</option>
                            <option value="Música">Música</option>
                            <option value="Orientação escolar">Orientação escolar</option>
                            <option value="Pedagogia">Pedagogia</option>
                            <option value="Portaria e Segurança">Portaria e Segurança</option>
                            <option value="Psicologia">Psicologia</option>
                            <option value="Recursos Humanos">Recursos Humanos</option>
                            <option value="Serviços gerais e Manutenção">Serviços gerais e Manutenção</option>
                            <option value="Tecnologia da Educação">Tecnologia da Educação</option>
                            <option value="Tecnologia da Informação">Tecnologia da Informação</option>
                            <option value="outra">Outra</option>
                        </select>
                        <label>Área de atuação</label>
                    </div>
                    <div class="input-field col l6 m12 s12 outra-area-input">
                        <input id="outra-area" type="text" class="validate outra-area" name="outra-area">
                        <label for="outra-area"> Qual Outra? </label>
                    </div>
                </div>
                <div class="row">
                    <p class="col l12 m12 s12">
                        <input type="checkbox" id="estagio" class="estagio" name="estagio">
                        <label for="estagio">Você está a procura de estágio?</label>
                    </p>
                </div>
                <div class="row">
                    <a class="btn waves-effect waves-light orange proximo right">
                        Próximo
                        <i class="material-icons right">arrow_forward</i>
                    </a>
                </div>
            </div>
            <div class="parte2">
                <!-- FORMAÇÃO ACADEMICA -->
                <input type="hidden" class="total-formacaoacademica" name="total-formacaoacademica" value="0">
                <div class="row">
                    <h2 class="tit-form-contact blue-text"> Formação acadêmica </h2>
                </div>
                <div class="formacao-academica-container"> </div>
                <div class="row" data-confirmadoacademica="false">
                    <div class="white-text btn green btn-add-academica waves-effect waves-light tooltipped" data-position="top" data-delay="50" data-tooltip="Adicionar formação acadêmica">
                        <i class="material-icons center">add_circle</i> 
                    </div>
                    <div class="white-text btn blue darken-4 btn-confirmar-academica waves-effect waves-light confirma-tooltipped" id="confirmar-academica" data-position="top" data-delay="0" data-tooltip="Confirmar" style="display:none;"> <i class="material-icons center">assignment_turned_in</i> </div>
                    <div class="white-text btn blue darken-4 btn-editar-academica waves-effect waves-light editar-tooltipped" id="editar-academica" data-position="top" data-delay="0" data-tooltip="Editar" style="display:none;"> <i class="material-icons center">edit</i> </div>
                </div>
                
                <!-- XP PROFISSIONAL -->
                <input type="hidden" class="total-xpprofissional" name="total-xpprofissional" value="0">
                <div class="row">
                    <h2 class="tit-form-contact blue-text"> Experiência profissional </h2>
                </div>
                <div class="xp-profissional-container"> </div>
                <div class="row" data-confirmadoxpp="false">
                    <div class="white-text btn green btn-add-xp-profissional tooltipped" data-position="top" data-delay="50" data-tooltip="Adicionar experiência profissional">
                        <i class="material-icons center">add_circle</i>
                    </div>
                    <div class="white-text btn blue darken-4 btn-confirmar-xpprofissional waves-effect waves-light confirma-tooltipped" id="confirmar-xpprofissional" data-position="top" data-delay="0" data-tooltip="Confirmar" style="display:none;"> <i class="material-icons center">assignment_turned_in</i> </div>
                    <div class="white-text btn blue darken-4 btn-editar-xpprofissional waves-effect waves-light editarxpp-tooltipped" id="editar-xpprofissional" data-position="top" data-delay="0" data-tooltip="Editar" style="display:none;"> <i class="material-icons center">edit</i> </div>
                </div>
                <div class="row">
                    <a class="btn waves-effect waves-light orange anterior left">
                        <i class="material-icons left">arrow_back</i>
                        Voltar
                    </a>

                    <button class="btn waves-effect waves-light orange right" type="submit" name="action">
                        Enviar 
                        <i class="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </form>
    </main>
    <footer class="page-footer blue darken-4 rodape">
		<div class="container">
			<div class="row">
			  <div class="col l5 m12 s12">
			    <h5 class="white-text ccb" style="font-size:1.4rem;">Colégio Jean Piaget</h5>
			    <ul>
                    <li>
                        <a class="grey-text text-lighten-3" href="/"> Inicio </a>
                    </li>
                    <li>
                        <a class="grey-text text-lighten-3" href="/sobre-o-colegio.asp"> Sobre o colégio </a>
                    </li>
                    <li>
                        <a class="grey-text text-lighten-3" href="/index.asp?pg=localizacao"> Localizção </a>
                    </li>
                    <li>
                        <a class="grey-text text-lighten-3" href="/diferenciais.asp"> Diferenciais </a>
                    </li>
                    <li>
                        <a class="grey-text text-lighten-3" href="/jp-na-midia/"> JP na mídia </a>
                    </li>
                    <li>
                        <a class="grey-text text-lighten-3" href="/conquistas-jp/"> Conquistas JP </a>
                    </li>
                    <li>
                        <a class="grey-text text-lighten-3" href="/ex-alunos/"> Ex-alunos </a>
                    </li>
                    <li>
                        <a class="grey-text text-lighten-3" href="/trabalhe-conosco/"> Trabalhe conosco </a>
                    </li>
			    </ul>
			  </div>
			  <div class="col l5 s12">
			  <h5 class="white-text" style="font-size:1.4rem;">Redes Sociais</h5>
			    <ul>
			      <li>
				      <a class="grey-text text-lighten-3" href="https://www.instagram.com/jeanpiagetsantos/" target="_blank" style="padding-right: 15px;">
				      	<i class="fa fa-instagram small" aria-hidden="true"></i>
				      </a>

				      <a class="grey-text text-lighten-3" href="https://www.facebook.com/jeanpiagetsantos/" target="_blank" style="padding-right: 15px;">
						<i class="fa fa-facebook-official small" aria-hidden="true"></i>
				      </a>

				      <a class="grey-text text-lighten-3" href="https://www.youtube.com/user/JeanPiagetSantos" target="_blank">
						<i class="fa fa-youtube-play small" aria-hidden="true"></i>
				      </a>
			      </li>
			    </ul>
			  </div>
			  <div class="col l2 m3 s6 ">
				<h5 class="white-text">
					<a class="grey-text text-lighten-3" href="/" target="_blank">
						<img src="img/logo_branco.png" class="responsive-img">
					</a>
				</h5>

			  </div>
			</div>
		</div>
		<div class="footer-copyright blue darken-4">
			<div class="container">
				&copy; 2017 Copyright Colégio Jean Piaget
			</div>
		</div>
	</footer>
</body>
</html>