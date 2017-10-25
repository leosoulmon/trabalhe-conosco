<%@LANGUAGE="VBSCRIPT"%> 
<!--#include file="../../../Connections/SiteJPCOM.asp" -->
<%
Response.Charset="ISO-8859-1"
nome = request.form("nome")
cep = request.form("cep")
endereco = request.form("endereco")
numero = request.form("numero")
compl = request.form("complemento")
bairro = request.form("bairro")
cidade = request.form("cidade")
estado = request.form("estado")
pais = request.form("pais")
email = request.form("email")
linkedin = request.form("linkedin")
latts = request.form("latts")
portfolio = request.form("portfolio")
area = request.form("area")
estagio = request.form("estagio")
totalfa = request.form("total-formacaoacademica")
totalxpp = request.form("total-xpprofissional")
totalfa = CInt(totalfa)
totalxpp = CInt(totalxpp)
ip = Request.ServerVariables("remote_addr")
if estagio = "on" then 
	estagio = 1
else
	estagio = 0
end if

Set MM_editCmd = Server.CreateObject("ADODB.Command")
MM_editCmd.ActiveConnection = MM_SiteJPCOM_STRING
MM_editQuery = "insert into pessoa (nm_pessoa, cd_cep, ds_endereco, cd_numero, ds_complemento, nm_bairro, nm_cidade, sg_estado, nm_pais, ds_email, ds_linkedin, ds_latts, ds_portifolio, ds_area, ic_estagio, cd_ipusuario) values ('"&nome&"','"&cep&"','"&endereco&"', '"&numero&"','"&compl&"','"&bairro&"','"&cidade&"','"&estado&"','"&pais&"','"&email&"','"&linkedin&"','"&latts&"','"&portfolio&"','"&area&"', "&estagio&", '"&ip&"')"
MM_editCmd.CommandText = MM_editQuery
'MM_editCmd.Execute    
MM_editCmd.ActiveConnection.Close

Set pessoaCV = Server.CreateObject("ADODB.Recordset")
pessoaCV.ActiveConnection = MM_SiteJPCOM_STRING
pessoaCV.Source = "SELECT SCOPE_IDENTITY() as cd_pessoa"
pessoaCV.CursorType = 0
pessoaCV.CursorLocation = 3
pessoaCV.LockType = 3
pessoaCV.Open()
total = pessoaCV.RecordCount

While NOT pessoaCV.EOF
    id = pessoaCV.Fields.Item("cd_pessoa").Value
pessoaCV.MoveNext()
Wend
pessoaCV.Close()

'INSERTS DE FORMAÇÃO ACADEMICA'
For i = 0 To totalfa-1
curso = request.form("curso"&i)
universidade = request.form("universidade"&i)
dt_inicio = request.form("dt-inicio-academica"&i)
dt_fim = request.form("dt-conclusao-academica"&i)
dt_inicio = Mid(dt_inicio,4,2)&"/01/"&right(dt_inicio,4)
dt_fim = Mid(dt_fim,4,2)&"/01/"&right(dt_fim,4)
'dt_inicio = Mid(dt_inicio,4,2)&"/"&Mid(dt_inicio,1,2)&"/"&right(dt_inicio,4)
'dt_fim = Mid(dt_fim,4,2)&"/"&Mid(dt_fim,1,2)&"/"&right(dt_fim,4)

	if request.form("curso"&i) <> "" or request.form("universidade"&i) <> "" or request.form("dt-inicio-academica"&i) <> "" then
		Set MM_editCmd = Server.CreateObject("ADODB.Command")
		MM_editCmd.ActiveConnection = MM_SiteJPCOM_STRING
		MM_editCmd.CommandText = "insert into pessoa_formacao_academica (nm_curso, nm_universidade, dt_inicio, dt_fim, cd_pessoa) values ('"&curso&"', '"&universidade&"', '"&dt_inicio&"', '"&dt_fim&"', "&id&")"
		MM_editCmd.Execute 
		MM_editCmd.ActiveConnection.Close
	end if
Next

'INSERTS DE EXPERIENCIA PROFISSIONAL

For i = 1 To totalxpp-1

	empresa = request.form("nome-empresa"&i)
	seguimento = request.form("seguimento"&i)
	cargo = request.form("cargo"&i)
	atribuicao = request.form("atribuicao"&i)
	dt_inicio = request.form("dt-inicio"&i)
	dt_fim = request.form("dt-fim"&i)
	dt_inicio = Mid(dt_inicio,4,2)&"/01/"&right(dt_inicio,4)
	dt_fim = Mid(dt_fim,4,2)&"/01/"&right(dt_fim,4)
	'dt_inicio = Mid(dt_inicio,4,2)&"/"&Mid(dt_inicio,1,2)&"/"&right(dt_inicio,4)
	'dt_fim = Mid(dt_fim,4,2)&"/"&Mid(dt_fim,1,2)&"/"&right(dt_fim,4)

	if request.form("nome-empresa"&i) <> "" or request.form("seguimento"&i) <> "" or request.form("cargo"&i) <> "" or request.form("dt-inicio"&i) <> "" or request.form("atribuicao"&i) <> "" then

		Set MM_editCmd = Server.CreateObject("ADODB.Command")
		MM_editCmd.ActiveConnection = MM_SiteJPCOM_STRING
		MM_editQuery = "insert into pessoa_experiencia_profissional (nm_empresa, nm_seguimento, nm_cargo, dt_inicio, dt_fim, cd_pessoa, ds_atribuicao) values ('"&empresa&"','"&seguimento&"','"&cargo&"','"&dt_inicio&"','"&dt_fim&"', "&id&", '"&atribuicao&"')"
		MM_editCmd.CommandText = MM_editQuery
		MM_editCmd.Execute
		MM_editCmd.ActiveConnection.Close

	end if
Next

'Response.write("<script> alert('Inscrição realizada com sucesso.');window.location = '/trabalhe-conosco/'; </script>")
%>