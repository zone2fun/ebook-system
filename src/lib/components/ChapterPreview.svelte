<script>
const chapters = [
  {
    number: 1,
    title: "Navigating the Spanish Bureaucracy",
    strapline: "Understanding Visas, Residency, and Legal Essentials",
    excerpt:
      "Spain is a beautiful country in Europe. It has warm weather, delicious food, and friendly people. You can visit famous cities like Madrid, Barcelona, and Seville. Enjoy beaches, historic buildings, art museums, and lively festivals. Spain is a great place for culture, history, and relaxation."
  },
  {
    number: 2,
    title: "Finding Your Dream Home in Spain",
    strapline: "Tips for Renting or Buying Property",
    excerpt:
      "From coastal villas to mountain retreats, Spain offers a wide variety of properties. Learn about regional differences, pricing, and what to look for when renting or buying."
  },
  {
    number: 3,
    title: "Healthcare in Spain",
    strapline: "How Expats Can Access Public and Private Care",
    excerpt:
      "Spain’s healthcare system is ranked among the best in Europe. Discover how to register for public healthcare and when private insurance might be beneficial."
  },
  {
    number: 4,
    title: "Learning Spanish Quickly",
    strapline: "Language Tips for Expats and Travelers",
    excerpt:
      "A few simple steps can help you pick up Spanish faster. From online classes to local language exchanges, we cover the most effective methods."
  },
  {
    number: 5,
    title: "Cost of Living in Spain",
    strapline: "Budgeting for Everyday Life",
    excerpt:
      "Understand the average costs of housing, groceries, utilities, and entertainment in different parts of Spain, from major cities to small towns."
  },
  {
    number: 6,
    title: "Spanish Festivals You Can’t Miss",
    strapline: "Celebrate Like a Local",
    excerpt:
      "From La Tomatina to San Fermín, Spain’s festivals are vibrant and unique. Get tips on how to join the fun safely and respectfully."
  },
  {
    number: 7,
    title: "Working in Spain",
    strapline: "Finding Jobs and Understanding Work Culture",
    excerpt:
      "Discover how to search for jobs, get work permits, and adapt to Spain’s workplace culture, which values work-life balance and long lunches."
  },
  {
    number: 8,
    title: "Opening a Bank Account in Spain",
    strapline: "Managing Your Finances Abroad",
    excerpt:
      "Learn which documents you need, the difference between resident and non-resident accounts, and how to set up online banking."
  },
  {
    number: 9,
    title: "Education Options in Spain",
    strapline: "Schools and Universities for Expats",
    excerpt:
      "Spain offers public, private, and international schools. Understand the differences and how to enroll your children in the right institution."
  },
  {
    number: 10,
    title: "Public Transport in Spain",
    strapline: "Getting Around Cities and Regions",
    excerpt:
      "Spain’s trains, buses, and metro systems are efficient and affordable. Find out how to buy tickets, travel passes, and apps that make commuting easier."
  },
  {
    number: 11,
    title: "Food Culture in Spain",
    strapline: "What and When to Eat",
    excerpt:
      "Learn why Spaniards eat dinner late, how tapas work, and where to find authentic regional dishes in markets and restaurants."
  },
  {
    number: 12,
    title: "Staying Connected",
    strapline: "Setting Up Internet and Mobile Services",
    excerpt:
      "Understand Spain’s mobile networks, fiber internet availability, and how to choose the best plan for your needs."
  }
];
let selectedChapterNumber = $state(1);

let selectedChapter = $derived(chapters.find(chapter=>chapter.number === selectedChapterNumber))

function selectChapter(chapter){
  selectedChapterNumber = chapter.number;
}

</script>

<section class="landing-page-section default-margin">
  <h2 class="mb-l">what you're getting</h2>
  <div class="chapter-container">
    <ul>
        {#each chapters as chapter }
          
        <li>
            <button class="chapter-title"
            class:selected-chapter-title={selectedChapterNumber === chapter.number}
            aria-controls={`chapter-info-${chapter.number}`} 
            
            aria-expanded={selectedChapterNumber === chapter.number}
            onclick={()=>selectChapter(chapter)}
            >
             <h3>Chapter {chapter.number}: {chapter.title}</h3>
            </button>
            </li>

       {/each}     
    </ul>
    <div class="chapter-info">
        <h3 class="chapter-strapline italic mb-s">
            {selectedChapter.title}
           
        </h3>
        <p>
             {selectedChapter.excerpt}
        </p>
    </div>
  </div>


</section>

<style>
    .chapter-container{
        display: flex;
        justify-content: space-between;
    }
    .chapter-container ul{
        width: 40%;
    }
    .chapter-info{
        width: 55%;
    }
    .chapter-title{
        border-bottom: 1px solid grey;
        width: 100%;
        display: block;
        padding: 12px;
        text-align: left;
    }
    .selected-chapter-title{
        background-color: black;

        border: none;
        color: white;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08);
    }
    .chapter-strapline{
        font-size: 23px;
        font-weight: bolder;
    }

</style>