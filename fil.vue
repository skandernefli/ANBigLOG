<div v-if="Array.isArray(data)" class="post-text mt-30"   >
                  
                     

   <span  v-for="(innerData) in   data " :key="innerData._id">
     <template  v-if="innerData.type === 'backlink'">
       <a :href="JSON.parse(innerData.value).backlinkLink"><u>{{
         (JSON.parse(innerData.value)).textOfLink
       }}</u></a>
       {{ log((JSON.parse(innerData.value)).textOfLink) }}
   
     </template>
     <template v-else-if="innerData.type === 'text'">
     
       {{ innerData.value }}
       {{ log(innerData.value) }}

 
   </template>
 </span>
 </p>
   



</div>
<script>
import Header from "../../Utility/Header/index";
import FooterOne from "../../Utility/Footer/FooterOne.vue";
import Drawer from "../../Mobile/Drawer.vue";
import HomeOne from "../../Utility/Sidebar/StyleOne.vue"; HomeOne

export default {
  props: {
    id: {
      type: String,
    }
  },
  components: { Header, HomeOne, FooterOne, Drawer },
  data: () => ({
    Posts: [],
    content: [],
    latestPostGallery: [],
    popularPostGallery: [],
    smallPostGallery: [],
    newParagraph: [],
    l: -1,
    selectedGallery: 'trendy',
    headerimage: "headerimage",
    coverimage: "coverimage",
    start: -1,
    sidebar: false,
  }),
  async created() {
    await this.fetchPosts();
    await this.fetchsmallPostGallery();
    await this.fetchlatestPostGallery();
    await this.fetchpopularPostGallery();
    this.content = this.Posts.content;
    this.content.forEach((data, index) => {
      if((index>this.l)&&(data.type==="test" || data.type==="backlink")){
        const end=this.lCalculate(index);
        const newParagraph=  this.filteredContent(index,end);
        const start=index;
        this.content.splice(start,end,newParagraph);
      }

    });
    console.log("final para",this.content);

    document.addEventListener("scroll", this.topToBottom);
  }, computed: {


    coverToShow() {
      return post => {
        for (let i = 0; i < post.content.length; i++) {
          if (post.content[i].type === "coverimage") {
            return post.content[i];
          }
        }
        return "";
      };

    },
    headerImage() {
      return post => {
        for (let i = 0; i < post.content.length; i++) {
          if (post.content[i].type === "headerimage") {
            return post.content[i];
          }
        }
        return "";
      };
    },

  },
  methods: {
    async fetchPosts() {
      try {
        const response = await fetch(`http://localhost:8000/server/post/${this.$route.params.postId}`); // use "postId" instead of "id"
        this.Posts = await response.json();
        this.headerimage = this.headerImage(this.Posts);
        this.coverimage = this.coverToShow(this.Posts);
        console.log("post", this.Posts);
      } catch (error) {
        console.error(error);
      }
    },
     filteredContent(index,end) {

       const start =index;
      const filteredContent = this.content.filter(( data,index) => start <= index && index <=end);
return this.content.slice(0, this.content.length, ...filteredContent);
    },
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
    topToBottom() {
      const result = document.querySelector(".go-top");
      if (
        document.body.scrollTop > window.innerHeight ||
        document.documentElement.scrollTop > window.innerHeight
      ) {
        result.classList.add("active");
      } else {
        result.classList.remove("active");
      }
    },

    lCalculate(index) {
      let l = -1; // Use this.l as the initial value of l
      for (let i = index; i < this.content.length; i++) {
        if (this.content[i].type !== "text" && this.content[i].type !== "backlink") {
          l = i;
          return l; // Update this.l with the new value

        }
      }
    }, log(data) {
      console.log(data)
    },

    assignSkip(index) {
      let skip = index;
      this.skip = skip;
    },


    selectGalleryTab(value) {
      this.selectedGallery = value;
    }, async fetchsmallPostGallery() {
      const response = await fetch("http://localhost:8000/server/trendy").then(res => res.json());
      const data = response[0].data;
      return this.smallPostGallery = data;
    },
    async fetchlatestPostGallery() {
      const response = await fetch("http://localhost:8000/server/latest").then(res => res.json());
      const data = response[0].data;
      return this.latestPostGallery = data;
    },
    async fetchpopularPostGallery() {
      const response = await fetch("http://localhost:8000/server/popular").then(res => res.json());
      const data = response[0].data;
      return this.popularPostGallery = data;
    },


  },
};
</script>