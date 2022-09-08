
// encurtar.addEventListener('click', () => {
//   hideURI()
// });

// encurtar.addEventListener('click', () => {
//   document.querySelector('.btn-encurtar').style.display = 'none';
//   document.querySelector('.carregando').style.display = 'block';

//   $.ajax({
//     method: 'POST',
//     url: 'https://api.encurtador.dev/encurtamentos',
//     headers: {
//       'content-type': 'application/json',
//     },
//     data: JSON.stringify({ url: linkInput.value }),
//   })
//     .done(response => {
//       document.querySelector('.btn-encurtar').style.display = 'block';
//       document.querySelector('.carregando').style.display = 'none';
//       linkCurto.textContent = response.urlEncurtada;

//       blueParrot.linkCurto = linkCurto.textContent;

//       // console.log(response.urlEncurtada)
//     })
//     .fail(e => {
//       document.querySelector('.btn-encurtar').style.display = 'block';
//       document.querySelector('.carregando').style.display = 'none';
//       console.log(e);
//     });
// });

// style
{/* <img
              class="carregando"
              src="activity_indicator.gif"
              alt="carregando"
            /> */}
// .carregando{
//   width: 21px;
//   height: 21px;
//   display: none;
// }