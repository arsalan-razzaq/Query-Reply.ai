import { Link } from "react-router-dom";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { getBlogPost } from "@/constants/blog";

const post = getBlogPost("how-to-auto-reply-to-amazon-buyer-messages")!;

export default function Article() {
  return (
    <ArticleLayout post={post}>
      <p>
        Amazon's expectation for buyer messages is a response within 24 hours — weekends and
        public holidays included. That clock does not care that you have forty listings, that the
        question arrived at 2am, or that answering it properly means opening the listing to check
        a measurement.
      </p>

      <p>
        Most sellers deal with this in one of three ways. It is worth being honest about where
        each one breaks, because the right answer depends on which failure you are actually
        hitting.
      </p>

      <h2>The three usual approaches</h2>

      <h3>1. Answering everything by hand</h3>

      <p>
        Accurate, and completely fine at low volume. It stops working the moment message volume
        outgrows the hours you are willing to sit in the inbox — which usually happens well before
        you are ready to hire someone.
      </p>

      <p>
        The tell is not that replies get worse. It is that they get <em>slower</em>, and then that
        you start answering at midnight to protect the response time.
      </p>

      <h3>2. Canned templates</h3>

      <p>
        Saved responses are excellent for the questions that genuinely repeat: shipping timelines,
        return windows, whether you invoice with VAT. If a question has the same answer regardless
        of which product it was asked about, a template is the correct tool and nothing more
        sophisticated is needed.
      </p>

      <p>
        Templates fall down on anything product-specific, which is most of what buyers actually
        ask. "Will this fit a 40cm shelf?" has a different answer for every listing you sell, and
        a template either has to be vague enough to be useless or specific enough to be wrong.
      </p>

      <h3>3. A general AI chatbot fed your catalogue</h3>

      <p>
        This handles product-specific questions, right up until two of your listings resemble each
        other. Then it starts blending them — pulling a dimension from one variant into an answer
        about another. We wrote about{" "}
        <Link to="/blog/why-ai-chatbots-give-wrong-answers-about-your-products">
          why that happens
        </Link>{" "}
        in more detail, but the short version is that the model is retrieving by similarity, and
        similar listings are exactly where similarity stops being a useful signal.
      </p>

      <p>
        A wrong answer on Amazon is not a neutral event. It is a return, sometimes a negative
        review, and occasionally a claim.
      </p>

      <h2>What a workable setup looks like</h2>

      <p>
        The split that holds up in practice is straightforward, and it maps to the three
        approaches above rather than replacing them:
      </p>

      <ul>
        <li>
          <strong>Policy questions → saved replies.</strong> Shipping, returns, invoicing. Same
          answer every time, so automate it with a template and stop thinking about it.
        </li>
        <li>
          <strong>Product questions → listing-specific AI.</strong> The reply gets built from the
          listing the question is about, not from a search across your catalogue.
        </li>
        <li>
          <strong>Anything the listing doesn't cover → you.</strong> The tool should say it does
          not have the detail rather than produce something plausible.
        </li>
      </ul>

      <p>
        That third line is the one people skip, and it is the one that decides whether you can
        actually leave the automation running unsupervised.
      </p>

      <h2>Setting this up with QueryReply AI</h2>

      <p>
        <Link to="/">QueryReply AI</Link> runs as a browser extension, which is what lets it take
        the second approach. It reads the listing open in your tab and answers from that listing's
        data — so a question about one product cannot pick up details from another.
      </p>

      <p>The setup runs to five steps, covered fully in the <Link to="/docs">documentation</Link>:</p>

      <ol>
        <li>Install the extension from the Chrome Web Store and pin it to your toolbar.</li>
        <li>Open it on Amazon Seller Central and turn on auto-reply for that platform.</li>
        <li>
          Choose AI Smart Reply for product questions, or write keyword rules that fire a specific
          saved reply when a phrase appears in an incoming message.
        </li>
        <li>
          Set your reply limits. The free plan allows up to 3 replies per conversation; paid plans
          remove that cap.
        </li>
        <li>Watch the dashboard for a few days and adjust the rules. Changes apply immediately.</li>
      </ol>

      <p>
        Step five is not optional busywork. The first week is where you find out which questions
        your listings genuinely fail to answer — and those gaps are worth fixing in the listing
        itself, not in the reply.
      </p>

      <h2>Things worth getting right</h2>

      <p>
        <strong>Fix the listing, not just the reply.</strong> If three buyers ask the same thing
        in a week, the listing is missing information. Automating the answer treats the symptom;
        adding it to the bullet points removes the question.
      </p>

      <p>
        <strong>Don't automate away the escalations.</strong> Damaged item, wrong item delivered,
        anything involving a refund — these want a human, and quickly. Keyword rules are useful
        here in reverse: use them to flag rather than to answer.
      </p>

      <p>
        <strong>Read the first fifty replies.</strong> Not forever, just at the start. You are
        checking tone as much as accuracy, and both are cheaper to correct early.
      </p>

      <p>
        <strong>Know what is retained.</strong> Worth asking of any tool you connect to a buyer
        inbox. QueryReply AI does not store product data or customer conversations — information
        is processed to generate the reply and not kept afterwards.
      </p>

      <h2>Where to start</h2>

      <p>
        If you are still answering everything by hand, start with saved replies for your three
        most repeated policy questions. That alone usually reclaims a meaningful share of the
        inbox, and it costs nothing to try.
      </p>

      <p>
        When product-specific questions become the bottleneck, that is the point where
        listing-aware AI earns its place. The <Link to="/pricing">free plan</Link> covers one
        website and one saved reply with no credit card, which is enough to see whether the
        replies hold up on your own listings before you commit to anything.
      </p>
    </ArticleLayout>
  );
}
