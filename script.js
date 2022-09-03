'use strict';

let blueParrot = {
  link: '',
  classificação: '',
  veiculo: '',
  linkCurto: '',
  tags: '',
};

/**
 * Inputs
 */
const divForm = document.querySelector('div.form');
const linkInput = divForm.querySelector('input#input-link');
const radioButtons = divForm.querySelectorAll('fieldset#classificacao input');
const veiculos = divForm.querySelector('select#veiculo-dropdown');
const categoria = divForm.querySelector('select#categoria-dropdown');
const tagInput = divForm.querySelector('#tag-input');
const teste = document.createElement('input');

/**
 * Outputs
 */
const resultadoTag = document.querySelector('resultado');
const linkContainer = resultadoTag.querySelector('#p-link');
const corContainer = resultadoTag.querySelector('#containerCor');
const veiculoContainer = resultadoTag.querySelector('#p-veiculo');
const categoriaContainer = resultadoTag.querySelector('#p-categoria');
const linkCurto = resultadoTag.querySelector('#link-curto')
const tagContainer = resultadoTag.querySelector('#tags');

// console.log(linkInput);

linkInput.addEventListener('keyup', e => {
  linkContainer.textContent = e.currentTarget.value;
  blueParrot.link = linkContainer.textContent;
  
});


radioButtons.forEach(radioBtn => {
  radioBtn.addEventListener('change', e => {
    corContainer.textContent = e.currentTarget.value;
    blueParrot.classificação = corContainer.textContent;
   
  });
});

veiculos.addEventListener('change', e => {
  let select = e.currentTarget;
  let selectedValue = select.value;
  let selectedOption = select.options[selectedValue];
  veiculoContainer.textContent = selectedOption.textContent + ' - ';
  blueParrot.veiculo = veiculoContainer.textContent;
});
categoria.addEventListener('change', e => {
  let select = e.currentTarget;
  let selectedValue = select.value;
  let selectedOption = select.options[selectedValue];
  categoriaContainer.textContent = selectedOption.textContent;
  blueParrot.categoria = categoriaContainer.textContent
});

tagInput.addEventListener('keyup', e => {
  tagContainer.textContent = e.currentTarget.value;
  blueParrot.tags = tagContainer.textContent;
});
//teste.addEventListener('keydown')

const encurtar = document.querySelector('.btn-encurtar');

encurtar.addEventListener('click', () => {
  document.querySelector('.btn-encurtar').style.display = "none"
  document.querySelector('.carregando').style.display = "block"
  
  $.ajax({
    method: 'POST',
    url: 'https://api.encurtador.dev/encurtamentos',
    headers: {
      'content-type': 'application/json',
    },
    data: JSON.stringify( { url: linkInput.value } ) ,
  }).done(response => {
    document.querySelector('.btn-encurtar').style.display = "block"
    document.querySelector('.carregando').style.display = "none"
    linkCurto.textContent = response.urlEncurtada

    blueParrot.linkCurto = linkCurto.textContent

    // console.log(response.urlEncurtada)
  }).fail(e => {
    document.querySelector('.btn-encurtar').style.display = "block"
    document.querySelector('.carregando').style.display = "none"
    console.log(e);
  });

});


console.log(blueParrot);


const btnCopiar = document.querySelector('.btn-copiar');


btnCopiar.addEventListener('click', (e) => {
  navigator.clipboard.writeText(
    `${blueParrot.link}\n${blueParrot.classificação}${blueParrot.veiculo}${blueParrot.categoria}\n${blueParrot.linkCurto}\n${blueParrot.tags}`
  ).then(() => {
    alert('Copiado')
  })

})