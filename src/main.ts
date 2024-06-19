

import { createApp } from 'vue'
import { useAllPlugins } from './plugins'
import App from './App.vue'
import CommonTable from "./components/CommonTable";
const app = createApp(App)
useAllPlugins(app)
app.use(CommonTable)
app.mount('#app')
