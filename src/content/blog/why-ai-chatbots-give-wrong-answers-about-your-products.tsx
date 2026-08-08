import { Link } from "react-router-dom";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { getBlogPost } from "@/constants/blog";

const post = getBlogPost("why-ai-chatbots-give-wrong-answers-about-your-products")!;

export default function Article() {
  return (
    <ArticleLayout post={post}>
      <p>
        You connect an AI chatbot to your store, feed it your catalogue, and for a week it looks
        brilliant. Then a customer asks whether the blue one comes in a large, and the bot
        confidently quotes the dimensions of the black one. Nobody notices until the return
        arrives.
      </p>

      <p>
        This is not a bug in the model. It is a direct consequence of how a general-purpose
        chatbot is set up, and it is worth understanding before you decide what to do about it.
      </p>

      <h2>The problem is the context, not the model</h2>

      <p>
        A general AI chatbot is given a pile of information up front — your product feed, your
        help docs, your policies — and then asked to answer whatever comes in. When a question
        arrives, it searches that pile for whatever looks relevant and writes an answer from what
        it finds.
      </p>

      <p>
        That works when your products are clearly different from each other. It starts failing the
        moment they are similar, because "looks relevant" stops being a reliable signal. Three
        listings for the same jacket in three colours share almost every word. A model retrieving
        by similarity has no way to know which one the customer is actually looking at.
      </p>

      <p>So it blends them. The result is an answer that is:</p>

      <ul>
        <li>
          <strong>Fluent</strong> — it reads exactly like a correct answer, which is precisely why
          it slips through
        </li>
        <li>
          <strong>Mostly right</strong> — the material, the care instructions and the brand are
          all fine
        </li>
        <li>
          <strong>Wrong on the one detail that mattered</strong> — the size chart came from a
          different listing
        </li>
      </ul>

      <p>
        A wrong answer that <em>sounds</em> wrong gets caught. A wrong answer that sounds right
        gets sent.
      </p>

      <h2>What this actually costs</h2>

      <p>
        The obvious cost is the return. The less obvious costs are the ones that compound: the
        negative review that mentions being "given the wrong information", the buyer message
        thread that now needs a human to untangle, and the slow erosion of your willingness to
        let the tool answer anything unsupervised.
      </p>

      <p>
        That last one is the real damage. Most sellers who try an AI chatbot and get burned end up
        reviewing every reply before it sends — at which point the automation has saved them
        nothing.
      </p>

      <h2>Why "just give it better data" doesn't fix it</h2>

      <p>
        The instinct is to improve the source material: cleaner product feeds, better
        descriptions, more structured attributes. That helps at the margins, and it is worth doing
        anyway. But it does not solve the underlying issue, because the issue is not that the
        information is bad. It is that <strong>too much of it is available at once</strong>.
      </p>

      <p>
        Give a model ten near-identical listings and ask it to answer a question about one of
        them, and you have created an ambiguity that no amount of data quality removes. The model
        is not confused about your products. It is confused about <em>which</em> product.
      </p>

      <h2>Listing-specific answering</h2>

      <p>
        The alternative is to narrow the context instead of enriching it. Rather than searching a
        catalogue, the AI reads the one listing the customer is currently viewing, and answers
        from that alone.
      </p>

      <p>
        This is the approach <Link to="/">QueryReply AI</Link> takes. It runs as a browser
        extension, so it sees the same page your customer is on. Every reply is built from that
        listing's data, and information is kept separate between listings, so details from one
        product cannot leak into an answer about another.
      </p>

      <p>The trade-off is deliberate and worth being explicit about:</p>

      <ul>
        <li>
          <strong>It cannot answer what isn't on the page.</strong> If a specification is missing
          from the listing, there is nothing to draw on.
        </li>
        <li>
          <strong>So it says so.</strong> Rather than guessing, it can tell the customer the
          information is unavailable, or route the question on for a human to handle.
        </li>
      </ul>

      <p>
        "I don't have that detail, let me check" is a worse answer than a correct one. It is a
        much better answer than a confident wrong one — and unlike a wrong one, it does not turn
        into a return three weeks later.
      </p>

      <h2>What to check before you trust any AI reply tool</h2>

      <p>
        Whatever you end up using, these are the questions worth asking. They separate tools that
        handle ambiguity from tools that paper over it.
      </p>

      <ol>
        <li>
          <strong>Where does the answer come from?</strong> A specific listing, or a search across
          everything? If it is a search, near-identical products are a known weak point.
        </li>
        <li>
          <strong>What happens when the information is missing?</strong> A tool that always
          produces an answer is a tool that will eventually invent one.
        </li>
        <li>
          <strong>Can details cross between products?</strong> Test it directly: create two
          listings that differ in exactly one specification and ask about that specification.
        </li>
        <li>
          <strong>What is retained?</strong> Worth knowing regardless of accuracy. QueryReply AI
          does not store product data or customer conversations — information is processed to
          generate the reply and not kept afterwards.
        </li>
      </ol>

      <h2>The short version</h2>

      <p>
        General chatbots get product questions wrong because they are asked to pick the right
        listing out of many similar ones, and similarity is exactly the signal that fails there.
        Narrowing the context to a single listing removes the ambiguity rather than trying to
        resolve it.
      </p>

      <p>
        If you want to see how that works in practice, the{" "}
        <Link to="/docs">setup guide</Link> walks through it in five steps, and there is a free
        plan you can test on a single site before committing to anything.
      </p>
    </ArticleLayout>
  );
}
