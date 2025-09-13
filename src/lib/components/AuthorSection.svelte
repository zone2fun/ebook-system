<script>
    import authorPic from "../../assets/profile_pic.jpg"
</script>

<section class="author-section">
   <h2 class="mb-l">
    About the author
   </h2>
   <div class="author-container">
     <div class="author-text">
       <p class="mb-s">Jessie Baren is an accomplished travel writer, researcher, and cultural storyteller who has spent more than fifteen years living and working across Europe, Asia, and the Americas. She is best known for her in-depth guides that blend practical tips with a sense of adventure, making complex topics such as immigration procedures, residency permits, and cross-cultural adaptation easy for readers to understand. Her passion for Spain began during her university years, when she spent a semester abroad in Seville and fell in love with the country’s blend of history, architecture, and community spirit. Since then, she has returned dozens of times to document local traditions, regional cuisines, and hidden gems that go beyond the usual tourist paths.</p>

<p>Outside of writing, Jessie is a sought-after speaker at travel conferences and workshops, where she helps aspiring expats and long-term travelers navigate bureaucratic systems with confidence. She holds a master’s degree in International Relations and frequently collaborates with NGOs and cultural institutes on projects that promote sustainable tourism and intercultural understanding. When she isn’t on the road, Jessie enjoys mentoring new writers, photographing everyday life in her adopted hometown of Valencia, and experimenting with recipes she discovers on her journeys. Her work combines warmth, expertise, and personal insight to inspire readers.</p>

     </div>
     <img src={authorPic} alt="Author Jessie Baren">
   </div>
</section>

<style>
    .author-section{
        padding: 80px 0;
        margin-left: 12vw;
        margin-right: 20vw;
        max-width: 1150px;
    }
    .author-container{
        display: flex;
        justify-content: space-between;
    }

    .author-container img {
        width: 40%;
        height: auto;
        border: 6px solid black;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08);
        margin-left: 2%;

    }

</style>