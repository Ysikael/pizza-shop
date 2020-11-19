import basilikFetch from "../basilikFetch";
import { useQuery } from "react-query";

export default function usePizzas(){
    return useQuery("pizzas", basilikFetch("/pizzas"), {
        refetchOnWindowFocus : false,
    });
}