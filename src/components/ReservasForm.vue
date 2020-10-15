<template>
<b-container class="card">
    <div class="card-body">
        <h4>RESERVAR</h4>
        <b-row>
            <b-col class="inputs" cols="4">
                <label class="label" for="inline-form-input-name">Nombre</label>
                <b-input id="inline-form-input-name" v-model="form.name" class="name  mr-sm-2 mb-sm-0"></b-input>
            </b-col>
            <b-col class="inputs" cols="2">
                <label class="label" for="datepicker">Fecha</label>
                <b-form-datepicker v-model="form.date" id="datepicker" class="input mb-2" placeholder="30/9/2019"></b-form-datepicker>
            </b-col>
            <b-col class="inputs" cols="2">
                <label class="label" for="timepickerIn">Desde</label>
                <b-form-timepicker v-model="form.start" id="timepickerIn" class="input mb-2" placeholder="12:00" locale="en"></b-form-timepicker>
            </b-col>
            <b-col class="inputs" cols="2">
                <label class="label" for="timepickerOut">Hasta</label>
                <b-form-timepicker v-model="form.end" id="timepickerOut" class="input mb-2" placeholder="13:00" locale="en"></b-form-timepicker>
            </b-col>
            <b-col class="button" cols="2">
                <b-button @click="guardar" class="buttonGuardar">Guardar</b-button>
            </b-col>
        </b-row>
    </div>
</b-container>
</template>

<script>
import {
    mapActions
} from 'vuex'
export default {
    data() {
        return {
            form: {
                name: "",
                date: "",
                start: "",
                end: "",
                id: "",

            },
        };
    },
    methods: {
        ...mapActions(["guardarReserva"]),

        guardar() {
            this.guardarReserva({
                name: this.form.name,
                date: this.form.date,
                start: this.form.start,
                end: this.form.end,
                id: Math.floor(Math.random() * (0, 100)),
                state: "green"

            })
            this.form.name = ""
            this.form.date = ""
            this.form.start = ""
            this.form.end = ""
        }
    },
};
</script>

<style>
.card h4 {
    color: #077041;
    font-weight: bold;
    display: flex;
    text-align: left;
    margin-bottom: 15px;
    margin-left: -10px;

}

.card {
    box-shadow: 10px 10px 5px -11px rgba(0, 0, 0, 0.75);

}

.button {
    margin-top: 21px !important;
}

.inputs {
    padding: 5px !important;
}

.label {
    display: flex;
    text-align: left;
}

td {
    font-weight: bold;
}

.bi-trash-fill {
    color: gray;
}

.buttonGuardar {
    background: #42b983 !important;
}
</style>
