<template>
<div class="home">

    <ReservasForm />
    <div class="Timeline">
        <h4>Agenda de Reservas</h4>
        <div class="icons" inline>
            <p>
                <b-icon icon="app" class="iconGreen"></b-icon>Mi Reserva Actual
            </p>
            <p>
                <b-icon icon="app" class="iconYellow" variant="warning"></b-icon>Reservado
            </p>
            <p>
                <b-icon icon="app"></b-icon>Disponible
            </p>
        </div>
        <Timeline ref="timeline" :items="items" :options="options"> </Timeline>
    </div>

    <ListReservas />
</div>
</template>

<script>
import ReservasForm from "../components/ReservasForm";
import ListReservas from "../components/ListReservas";

import {
    Timeline
} from "vue2vis";

export default {
    name: "Home",
    components: {
        ReservasForm,
        ListReservas,
        Timeline,
    },
    data() {
        return {
            items: [{
                    id: 1,
                    content: "Reserva 1",
                    group: 0,
                    start: "2019-03-1 10:00",
                    end: "2019-03-1 10:30",
                },
                {
                    id: 2,
                    content: "Reserva 2",
                    group: 0,
                    start: "2019-03-1 11:00",
                    end: "2019-03-1 11:45",
                },
            ],
            options: {
                //stack: false,
                orientation: {
                    axis: "top",
                    item: "top",
                },
                //zoomMax: 31536000000, // just one year
                zoomMax: 87600900, // 10,000 years is maximum possible
                zoomMin: 10000000, // 10ms
            },
        };
    },
};
</script>

<style lang="css">
@import "../../node_modules/vue2vis/dist/vue2vis.css";

.Timeline {
    margin: 30px;
}

.icons {
    display: flex;
    flex-direction: row-reverse;

    /*margin: 2px;*/
}

.iconGreen {
    background: #42b983;
    margin-left: 30px;

}

.iconYellow {
    background: yellow;
    margin-left: 30px;

}

.Timeline h4 {
    display: flex;
    text-align: left !important;

}
</style>
