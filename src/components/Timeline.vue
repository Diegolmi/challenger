<template>
<div class="row">
    <div class="col-1">
        <i class="material-icons dp48 buttons-menu" id="moveLeft" @click="moveLeft()">arrow_back</i>
    </div>
    <div class="col-10" id="visualization">
        <input style="display:none;" id="sliderZoom" @input="zoom()" type="range" class="range" name="a" min="-1" max="1" step="0.1" value="0" />
    </div>
    <div class="col-1">
        <i class="material-icons dp48 buttons-menu" id="moveRight" @click="moveRight()">arrow_forward</i>
    </div>
</div>
</template>

<script>
export default {
    name: "Timeline",
    data() {
        return {
            timeline: null,
            dataset: null
        }
    },
    props: {
        items: {
            type: Array,
            default: []
        },
        options: {
            type: Object,
            default: {}
        },
        groups: {
            type: Array,
            default: []
        }
    },
    methods: {
        move(percentage) {
            var range = this.timeline.getWindow();
            var interval = range.end - range.start;
            this.timeline.setWindow({
                start: range.start.valueOf() - interval * percentage,
                end: range.end.valueOf() - interval * percentage
            });
        },
        moveLeft() {
            this.move(0.2);
        },
        moveRight() {
            this.move(-0.2);
        },
        zoom(e) {
            var value = this.value;
            if (value < 0) {
                var start = moment().year(moment().year() - 100000), // to adjust with options
                    end = moment().year(moment().year() + 1);
                this.timeline.zoomOut(-value);
                if (value === "-1") this.timeline.setWindow(start, end);
            } else if (value > 0) {
                var start = moment(),
                    end = moment(moment().utc() + 10);
                this.timeline.zoomIn(value);
                if (value === "1") this.timeline.setWindow(start, end);
            } else {
                this.timeline.fit(this.dataset.getIds());
                this.value = 0;
            }
        }

    },
    mounted: function () {
        var container = document.getElementById("visualization");
        this.dataset = new vis.DataSet(this.items);

        this.timeline = new vis.Timeline(container, this.dataset, this.options);
    },
    created() {
        this.timeline = null;
    },
    watch: {
        items: {
            deep: true,
            handler(items) {
                this.dataset = new vis.DataSet(items);
                this.timeline.setItems(this.dataset)
            }
        }
    }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

body,
html,
input {
    font-family: "Montserrat", sans-serif;
    font-size: 12pt;
}

#visualization {
    position: relative;
}

.menu {
    position: absolute;
    display: table-cell;
    vertical-align: middle;
    bottom: -50px;
    right: 0;
    margin: 10px;
    z-index: 9999;
}

.range {
    margin: -12px 12px 0 0;
    background: #333;
}

label,
input {
    vertical-align: middle;
    padding: 0px;
    margin: 0px;
    height: 20px;
    margin-top: -12px;
    margin-right: 12px;
}

.buttons-menu {
    background-color: #555;
    color: #fff;
    padding: 4px;
    border-radius: 50px;
    cursor: pointer;
}

.buttons-menu:hover {
    opacity: 0.9;
}

.vis-item.orange {
    background-color: #fff38c;
    border-color: #fff38c;
}

.vis-item.vis-selected.orange {
    background-color: #fff38c;
    border-color: #fff38c;
}

.vis-item.green {
    background-color: #5df39b;
    border-color: #4df392;
}

.vis-item.vis-selected.green {
    background-color: #4df392;
    border-color: #4df392;
}
</style>
