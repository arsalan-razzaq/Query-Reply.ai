import { Link } from "react-router-dom";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { getBlogPost } from "@/constants/blog";

const post = getBlogPost("answering-product-questions-across-multiple-marketplaces")!;

export default function Article() {
  return (
    <ArticleLayout post={post}>
      <p>
        Selling in one place is a support problem. Selling in four is a different problem
        entirely, and the difference is not just volume.
      </p>

      <p>
        List the same catalogue on Amazon, eBay, Etsy and your own store and you now have four
        inboxes, four message formats, and — the part that causes the actual errors — four
        versions of the same product's information. The eBay listing has a measurement the Etsy
        one is missing. The Amazon bullet points were rewritten for keywords six months ago and
        nobody updated the others.
      </p>

      <p>
        Ask "what colour is this?" on each of them and, strictly speaking, you are asking about
        four different pieces of listing data.
      </p>

      <h2>Why the obvious fixes underdeliver</h2>

      <h3>A shared knowledge base</h3>

      <p>
        The instinct is to write one master document with every product's real specifications and
        answer from that. It is worth having regardless — but it does not solve the support
        problem, because the buyer did not read your master document. They read the listing in
        front of them.
      </p>

      <p>
        If your master doc says the shelf is 42cm and the eBay listing says 40cm, answering "42cm"
        is technically correct and still produces a dispute. The buyer's expectation was set by
        the page they bought from.
      </p>

      <h3>One AI trained on everything</h3>

      <p>
        Feeding all four catalogues into one assistant makes the ambiguity worse rather than
        better. You have now given it four near-identical descriptions of every product and asked
        it to pick the right one — with no signal telling it which marketplace the question came
        from.
      </p>

      <h3>Per-platform templates</h3>

      <p>
        Workable for policy questions, and genuinely worth doing there. But you end up maintaining
        four sets of them, and they still cannot answer anything product-specific.
      </p>

      <h2>The rule that actually holds</h2>

      <p>
        <strong>Answer from the listing the customer is looking at.</strong> Not from your master
        data, not from a search across every channel — from the specific page that set their
        expectations.
      </p>

      <p>
        This sounds like a compromise and is not. The listing the buyer read is the one that forms
        the contract in their mind. If it contains an error, the error needs fixing in the
        listing; answering around it just moves the disagreement to a later, more expensive stage.
      </p>

      <p>
        It is also the rule that makes multi-channel support tractable, because it turns one hard
        problem — reconciling four sources of truth in real time — into the same easy problem
        repeated four times.
      </p>

      <h2>How this works in practice</h2>

      <p>
        <Link to="/">QueryReply AI</Link> works this way by construction. It runs as a browser
        extension rather than a platform integration, so whichever marketplace you have open, it
        reads that page. The same tool covers Amazon, eBay, Etsy, Walmart, ASOS, Shein, Google
        Play Books, TripAdvisor, Airbnb, WhatsApp Web, your own store, or a custom platform —
        because it is not integrating with an API per marketplace, it is reading the listing in
        front of it.
      </p>

      <p>
        Information stays separate between listings, so a reply about the eBay version cannot pick
        up a specification from the Etsy one. Enable auto-reply per platform from the extension,
        and set rules per platform if the tone should differ — Etsy buyers and Amazon buyers do
        not always want the same voice.
      </p>

      <p>
        Note that the free plan covers one website. Multi-channel is where the paid plans start
        mattering, since unlimited websites is the whole point.
      </p>

      <h2>Worth doing alongside</h2>

      <ol>
        <li>
          <strong>Audit your listings against each other, once.</strong> Pick your ten best
          sellers and compare specifications across channels. The discrepancies you find are
          future disputes you can delete today.
        </li>
        <li>
          <strong>Track which channel generates the most questions.</strong> It is rarely the one
          with the most sales. That gap usually points at a listing that is missing information
          rather than a difficult audience.
        </li>
        <li>
          <strong>Keep policy answers centralised.</strong> Returns and shipping genuinely are the
          same everywhere. Those belong in saved replies, written once.
        </li>
        <li>
          <strong>Let repeated questions edit your listings.</strong> Three buyers asking the same
          thing on the same channel is a listing gap with a queue forming behind it.
        </li>
      </ol>

      <h2>The short version</h2>

      <p>
        Multi-channel support goes wrong when replies are answered from a central source of truth
        that the customer never saw. Answering from the listing they actually read keeps every
        reply consistent with the expectation it is responding to.
      </p>

      <p>
        The <Link to="/docs">setup guide</Link> covers enabling this per platform, and{" "}
        <Link to="/pricing">pricing</Link> has the plan comparison if you are running more than
        one channel.
      </p>
    </ArticleLayout>
  );
}
