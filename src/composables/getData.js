import axios from 'axios';
import {ref} from  'vue';

export const useGetData = () => {
    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);

    const getData = async(url) => {
        console.log("Begin");
        loading.value = true;
        try{
            const res = await axios.get(url);
            data.value = res.data;
            console.log(data.value);
            console.log("End");
        }catch(e){
            error.value = 'Error de servidor';
            
        }finally{
            console.log("Finally");
            loading.value = false;
        }
    }

    return {
        getData, 
        data,
        loading,
        error,
    }
};