<template>
  <div class="home">
    <!-- <h1>Respostas da API:</h1>
    <h2>Corruptos</h2>
    <pre>{{getReimbursementList}}</pre> -->
    <l-map
      :zoom="zoom"
      :center="center"
      style="height: 80%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate">
      <l-tile-layer
        :url="url"
        :attribution="attribution"/>
      <l-marker :lat-lng="marker">
        <l-popup>
          <div @click="popupClick">
            I am a tooltip
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi. Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-popup>
      </l-marker>
    </l-map>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'

export default {
  name: 'home',
  data () {
    return {
      zoom: 13,
      center: L.latLng(47.413220, -1.219482),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.413220, -1.219482),
      currentZoom: 13,
      currentCenter: L.latLng(47.413220, -1.219482),
      showParagraph: false
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  mounted () {
    this.fetchReimbursementList()
  },
  computed: {
    ...mapGetters('mapwinners', ['getReimbursementList'])
  },
  methods: {
    ...mapActions('mapwinners', ['fetchReimbursementList']),
    zoomUpdate (zoom) {
      this.currentZoom = zoom
    },
    centerUpdate (center) {
      this.currentCenter = center
    },
    showLongText () {
      this.showParagraph = !this.showParagraph
    },
    popupClick () {
      alert('Popup Click!')
    }
  }
}
</script>
