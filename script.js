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
const tagContainer = resultadoTag.querySelector('#tags');

// console.log(linkInput);

linkInput.addEventListener('keyup', e => {
  linkContainer.textContent = e.currentTarget.value;
});

radioButtons.forEach(radioBtn => {
  radioBtn.addEventListener('change', e => {
    corContainer.style.backgroundColor = e.currentTarget.value;
  });
});

veiculos.addEventListener('change', e => {
  let select = e.currentTarget;
  let selectedValue = select.value;
  let selectedOption = select.options[selectedValue];
  veiculoContainer.textContent = selectedOption.textContent;
});
categoria.addEventListener('change', e => {
  let select = e.currentTarget;
  let selectedValue = select.value;
  let selectedOption = select.options[selectedValue];
  categoriaContainer.textContent = selectedOption.textContent;
});

tagInput.addEventListener('keyup', e => {
  tagContainer.innerHTML = '';
  let tagString = '';
  tagString = e.currentTarget.value;
  let tags = tagString.split(';');
  // tagContainer.textContent =
  console.log(tags, tagContainer);

  tags.forEach(tag => {
    tag = tag.trim();
    if (tag.length > 0) {
      let element = document.createElement('p');
      element.classList.add('created-tag');
      element.textContent = tag;
      tagContainer.appendChild(element);
    }
  });
});
//teste.addEventListener('keydown')
