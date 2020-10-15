<template>
<div>
    <b-table :items="reservas" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" class="table" responsive="sm">
        <template v-slot:cell(id)="data">
            <!-- `data.value` is the value after formatted by the Formatter -->
            <a href="#" @click="eliminar(data.value)">
                <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
            </a>
        </template>
        <template v-slot:cell(startEnd)="data">
            de {{ moment(data.item.start, "h:mm").format("H:mm") }} a {{ moment(data.item.end, "h:mm").format("H:mm")  }}
        </template>
    </b-table>
</div>
</template>

<script>
import {
    mapActions,
    mapState
} from "vuex";
import moment from 'moment'

export default {
    data() {
        return {
            sortBy: "name",
            sortDesc: false,
            fields: [{
                    key: "name",
                    sortable: true,
                    label: "Nombre"
                },
                {
                    key: "startEnd",
                    sortable: true,
                    label: "Fecha"
                },
                {
                    key: "id",
                    label: "accion",
                    sortable: false,
                    label: "Accion"
                },
            ],
        };
    },
    computed: {
        ...mapState(["reservas"]),

    },
    methods: {
        ...mapActions(["eliminarReserva"]),
        eliminar(id) {
            //console.log(id),
            this.eliminarReserva(id)

        }
    }
};
</script>

<style>

</style>
