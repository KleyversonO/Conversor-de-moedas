## Conversos de moedas
O projeto tem a função de treinar javaScript, fazendo um site que fará com que você digite um valor e ele ira dar algumas moedas para selecionar, em 2 diferentees espaços, e após clicar em "Converter" ele irá dizer a diferença de valor de uma para outra. Foi feito durante as aulas de Programação Web 1 sobre a supervisão do professor Leonardo Santiago Sidon da Rocha.

# Função
O projeto possui uma interface simples, porém funcional e intuitiva. No projeto é possível ver uma caixa aonde você pode digitar um valor númerico, ou apenas selecionar um com os botões ao lado. Mais abaixo á um caixa aonde você pode selecionar um tipo de moeda, e um pouco abaixo pode selecionar também as mesmas moedas. Abaixo dessas caixas possui 3 botões, um escrito "Trocar moedas" aonde caso você clique, ele inverte as moedas selecionadas, o botão "Apagar" que ira apagar o número digitado e por último o botão "Converter", que irá dizer a diferença de valores entre as duas moedas selecionadas.
![gif](img/grav.gif)

## Valores/ Moedas
![foto](img/valorM.png)
Aqui foi selecionado as moedas e a diferencição que uma tem sobre a outra.

## Const Enumero
![foto](img/apNumeros.png)
É utilizada a "const" que tem função de validar se foram utilizados apenas números.

## Const cepValido
![foto](img/quantDigitos.png)
Código com a função de verificar se o que foi digitado tem apenas 8 digitos

## Const preencherFormulario
![foto](img/preencheCampos.png)
Tem a função de preencher campos relacionados ao CEP


## Consumo API
![foto](img/consumo.png)
* "assync" é uma função que irá ser usada de forma combinada com o "await", que significa que ela irá suspender o método de chamada, e transferir o controle ao seu chamador, até que a tarefa esteja completa.

* Const URL: Foi utilizado uma  "const" para que se use o site "ViaCep" para que ele faça parte do processo de pegar um CEP e localizar. No site é mostrado um exemplo, porém foi alterado no projeto o local aonde o CEP de exemplo é posto para um "cep.value", aonde a pessoa que utilizar o site conseguirá digitar um CEP que a própria queira, e fazer com que ela funcione de acordo com o CEP digitado.

* Await: como citado antes, o "await" é um código que se usa da propriedade "assync", e nesse ponto ela estaria fazendo sua função antes citada.

* hasOwnProperty: é uma propriedade que irá retornar o bolleano indicado para ver ser a propriedade é definida no próprio objeto. Se não for o caso, ela irá retornar um Else falso.

* addEventListener: Ele irá registrar uma única espera de evento em um único alvo. Nesse caso fazendo com que assim que o usuário do site saia da caixa de adicionar CEP, o processo aonde ele valida o próprio e caso seja correto mostre as informações, e caso de errado, irá informar que o CEP é inválido.

## Fontes
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Introducing
https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener




## Tecnologias utilizadas 

* ``HTML 5``
* ``CSS 3``
* ``Java Script``
* ``Github``
* ``VsCode``
* ``Microsoft Teams``
* ``Google``
## Autor
Kleyverson de Oliveira Sampaio