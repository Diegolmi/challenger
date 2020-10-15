<template>
<div class="home">

    <ReservasForm />
    <div class="Timeline">
        <h4>Agenda de Reservas</h4>
        <div class="icons" inline>
            <p>
                <b-icon icon="app" class="rounded iconGreen"></b-icon>Mi Reserva Actual
            </p>
            <p>
                <b-icon icon="app" class="rounded iconYellow"></b-icon>Reservado
            </p>
            <p>
                <b-icon icon="app" class="rounded iconWhite"></b-icon>Disponible
            </p>
        </div>
        <Timeline :items="items" :groups="groups" :options="options"></Timeline>
    </div>

    <ListReservas />
</div>
</template>

<script>
import ReservasForm from "../components/ReservasForm";
import ListReservas from "../components/ListReservas";
import {
    mapActions,
    mapState
} from "vuex";
import Timeline from "../components/Timeline";

export default {

    name: "Home",
    components: {
        ReservasForm,
        ListReservas,
        Timeline,
    },
    data() {
        return {
            groups: [{
                id: 0,
                content: "grupo 0"
            }],
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
    computed: {
        ...mapState(["reservas"]),
        items() {
            return this.reservas.map(reserva => {
                return {
                    id: reserva.id,
                    start: reserva.date + " " + reserva.start,
                    end: reserva.date + " " + reserva.end,
                    group: 0,
                    className: reserva.state
                }
            })
        }

    }
};
</script>

<style lang="css">
.home {
    padding: 30px;
}

.Timeline {
    margin: 30px;
}

.icons {
    display: flex;
    flex-direction: row-reverse;
}

.iconGreen {
    background: #42b983;
    margin-left: 30px;
    margin-right: 5px;

}

.iconYellow {
    background: #fff38c;
    margin-left: 30px;
    margin-right: 5px;

}

.iconWhite {
    margin-right: 5px;

}

.Timeline h4 {
    display: flex;
    text-align: left !important;

}
</style>
