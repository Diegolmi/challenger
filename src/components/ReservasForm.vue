<template>
<div class="reservation">
    <h4>RESERVAR</h4>

    <div>
        <b-form inline>

            <b-input id="inline-form-input-name" v-model="form.name" class="name  mr-sm-2 mb-sm-0"></b-input>
            <b-form-datepicker v-model="form.date" id="datepicker" class="input mb-2" placeholder="30/9/2019"></b-form-datepicker>
            <b-form-timepicker v-model="form.start" id="timepickerIn" class="input mb-2" placeholder="12:00" locale="en"></b-form-timepicker>
            <b-form-timepicker v-model="form.end" id="timepickerOut" class="input mb-2" placeholder="13:00" locale="en"></b-form-timepicker>

            <b-button @click="guardar" class="buttonGuardar">Guardar</b-button>
        </b-form>
    </div>

</div>
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
        onSubmit(evt) {
            evt.preventDefault();
            alert(JSON.stringify(this.form));
        },
        onReset(evt) {
            evt.preventDefault();
            // Reset our form values

            this.form.name = "";
        },
        guardar() {
            this.guardarReserva({
                name: this.form.name,
                date: this.form.date,
                start: this.form.start,
                end: this.form.end,
                id: Math.floor(Math.random() * (0, 100))
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
.reservation {
    margin: 30px;

}

.input {
    margin: 10px;
    /*box-shadow: 11px 11px 18px -12px rgba(0, 0, 0, 0.75);*/

}

.reservation h4 {
    color: #077041;
    font-weight: bold;
    display: flex;
    text-align: left;
}

.name td {
    font-weight: bold;
}

.buttonGuardar {
    background: #42b983 !important;
}
</style>
