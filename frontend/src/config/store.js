//Area de armazenamento 
//Compartilhada entre componentes
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default  new Vuex.Store({
    state:{
        isMenuVisible:true,
        user:{
            name:'Usuário Mock',
            email:'usuario@gmail.com'
        }
    },
    //Mutation responsavel pela comunicação do compontent menu
    //e do component header
    mutations:{
        toggleMenu(state,isVisible){
            if(isVisible === undefined){
                state.isMenuVisible = !state.isMenuVisible;
            }
            else{
                state.isMenuVisible = isVisible
            }
            console.log(state.isMenuVisible)
        }
    }
})