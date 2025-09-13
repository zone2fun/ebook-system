<script>
    import { FaqItem, Button} from "$lib"
    import xIcon from "../../assets/icons/twitter.webp"

const faqs = [
  {
    question: "What will I learn from this ebook?",
    answer: "This ebook provides a comprehensive overview of its topic with easy-to-follow explanations and practical tips."
  },
  {
    question: "Who is this ebook for?",
    answer: "It’s designed for beginners and enthusiasts who want to deepen their understanding of the subject quickly."
  },
  {
    question: "How can I access the ebook after purchase?",
    answer: "You will receive an instant download link via email once your payment has been confirmed."
  },
  {
    question: "Can I read this ebook on my phone or tablet?",
    answer: "Yes, the ebook is available in PDF and EPUB formats, making it compatible with most devices and e-readers."
  },
  {
    question: "Does the ebook include case studies or examples?",
    answer: "Yes, it features real-world examples, case studies, and exercises to help you apply what you learn."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Absolutely. If you’re not satisfied with the content within 14 days of purchase, you can request a full refund."
  },
  {
    question: "Will I get updates if the ebook is revised?",
    answer: "Yes, all buyers receive free lifetime updates whenever new editions or revisions are released."
  },
  {
    question: "Can I share the ebook with my friends?",
    answer: "Each purchase grants one personal license. Please encourage friends to buy their own copy to support the author."
  }
];

let questionCurrentlyExpanded = $state(-1);

function onclick(index){

  if(questionCurrentlyExpanded===index){
    questionCurrentlyExpanded = -1;
  }else{

    questionCurrentlyExpanded = index;
  }
  

}


</script>
<section class="landing-page-section">
    <h2 class="mb-l">
        frequently asked questions
    </h2>
    <div class="faq-container">
        {#each faqs as faq, index }
            <FaqItem {faq} isExpanded={index === questionCurrentlyExpanded} onclick={()=>onclick(index)}/>
        {/each}
        
    </div>

    <div class="additional-info">
        <Button class="mt-s">Buy Now</Button>
        <p class="mt-s">Any other question?</p>
        <a href="https://x.com">
          <p>Hit me up on twitter
             <img src={xIcon} class="twitter-icon" alt="">
          </p>
        </a>
    </div>

</section>

<style>
  .additional-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: grey;
  }
  .twitter-icon{
    width: 16px;
    height: 16px;
  }
 .additional-info a {
    text-decoration: underline;
  }
  .faq-container{
    width: 100%;
  }
</style>