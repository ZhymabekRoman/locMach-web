<template>
          <div id="app">
                      <div class="container" style="width:600px">
                                    <div style="margin: 20px">
                                                    <h3>bezkoder.com</h3>
                                                            <h4>Vue.js upload Files</h4>
                                                                  </div>

                                                                        <upload-files></upload-files>
                                                                            </div>
                                                                              </div>
</template>

<script>
        import UploadFiles from "@/components/UploadFiles.vue";

        export default {
          name: "App",
          components: {
              UploadFiles
            }
        };
</script>
