import Notiflix from 'notiflix';

export default defineNuxtPlugin((nuxtApp) => {
    const Nofiflix = {
        async loadingData(word) {
            Notiflix.Loading.pulse(word);
            await new Promise(resolve => setTimeout(resolve, 1000));
            Notiflix.Loading.remove();
        }
    }
    nuxtApp.provide('notiflix', Nofiflix);
});
