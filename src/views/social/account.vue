<template>
  <div class="account wrap">
    <button @click="shareScreen">共享屏幕</button>
  </div>
</template>

<script>
import './style.scss'

export default {
  data() {
    return {
    }
  },
  methods: {
    shareScreen: async () => {
      // 只有地址为localhost://, https://, 文件访问file:// 这三种情况可以调起设备，也就是navigator.mediaDevices不为undefined
      console.log(navigator.mediaDevices, 'navigator.mediaDevices')
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true
      })
      const mime = MediaRecorder.isTypeSupported("video/webm;codecs=h264")
          ? "video/webm;codecs=h264"
          : "video/webm";

      const mediaRecorder = new MediaRecorder(stream, { mimeType: mime });

      const chunks = [];
      mediaRecorder.addEventListener("dataavailable", function (e) {
        chunks.push(e.data);
      });

      mediaRecorder.addEventListener("stop", function() {
        const blob = new Blob(chunks, { type: chunks[0].type });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "video.webm";
        a.click();
      });
      mediaRecorder.start();
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
