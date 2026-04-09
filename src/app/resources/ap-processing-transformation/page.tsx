"use client";

import { ArticleLayout } from "@/components/sections/article-layout";

export default function APTransformationPage() {
  return (
    <ArticleLayout
      category="Case Study"
      title="From Manual to Automated: An AP Processing Transformation"
      date="March 2025"
    >
      <p>
        A mid-market company was processing several hundred invoices monthly, every
        one of them manually. Staff would open each invoice — PDF attachments, scanned
        documents, emailed images — type the data into NetSuite, code it to the
        correct GL account, match it to a purchase order, and submit it for approval.
        The process was slow, error-prone, and consumed a disproportionate amount of
        the finance team&apos;s time.
      </p>

      <h2>The Challenge</h2>
      <p>
        The problems went beyond just speed. Manual data entry introduced errors —
        wrong amounts, incorrect vendor assignments, mismatched PO numbers — that
        cascaded through the accounting process. Month-end reconciliation became a
        time-consuming exercise in detective work, tracing discrepancies back to
        their source.
      </p>
      <p>
        The team had explored OCR (optical character recognition) tools, but found
        them unreliable with the variety of invoice formats they received. They
        needed something that could actually understand the content of an invoice,
        not just scan for text patterns.
      </p>

      <h2>The Solution</h2>
      <p>
        We built an AI agent designed specifically for their invoice processing
        workflow. The system works in five stages:
      </p>
      <ol>
        <li>
          <strong>Intake:</strong> Invoices arrive via email to a monitored inbox.
          The AI agent picks them up automatically — PDFs, images, or any attached
          document format.
        </li>
        <li>
          <strong>Extraction:</strong> The AI reads each invoice using a large
          language model fine-tuned for document understanding. It extracts vendor
          name, invoice number, date, line items, amounts, PO references, and
          payment terms.
        </li>
        <li>
          <strong>Matching:</strong> Extracted data is matched against existing
          vendor records and open purchase orders in NetSuite. The AI flags
          discrepancies — amount mismatches, unknown vendors, missing POs — for
          human review.
        </li>
        <li>
          <strong>Human review:</strong> A reviewer sees the extracted data
          side-by-side with the original invoice. Clean extractions take seconds to
          approve. Flagged items get corrected manually before proceeding.
        </li>
        <li>
          <strong>Submission:</strong> Approved invoices are pushed to NetSuite
          with correct coding, vendor mapping, and GL entries. No manual data entry
          required.
        </li>
      </ol>

      <h2>The Results</h2>
      <p>
        The transformation was immediate and measurable:
      </p>
      <ul>
        <li>
          <strong>Processing time:</strong> Invoice processing dropped from an
          average of 15-20 minutes per invoice to under 2 minutes, including human
          review time.
        </li>
        <li>
          <strong>Accuracy:</strong> AI extraction accuracy exceeded 95% on first
          pass, with the human review step catching the remaining edge cases before
          they reached NetSuite.
        </li>
        <li>
          <strong>Volume capacity:</strong> The same team now handles significantly
          more invoices without adding headcount, preparing the company for
          continued growth.
        </li>
        <li>
          <strong>Month-end close:</strong> Reconciliation time decreased
          substantially as data entry errors were virtually eliminated at the source.
        </li>
      </ul>

      <h2>Why It Worked</h2>
      <p>
        Three design decisions were critical to the success of this project:
      </p>
      <p>
        <strong>First, the human-in-the-loop step.</strong> The finance team needed
        to trust the system before relying on it. By reviewing every invoice in the
        early weeks, they built confidence in the AI&apos;s accuracy. Over time,
        they shifted to reviewing only flagged items, further increasing throughput.
      </p>
      <p>
        <strong>Second, the deep integration with NetSuite.</strong> The AI agent
        doesn&apos;t just extract data — it understands NetSuite&apos;s data model,
        vendor records, GL structure, and approval workflows. This meant zero
        reformatting or manual mapping between the AI output and the ERP.
      </p>
      <p>
        <strong>Third, handling variety.</strong> Unlike rigid OCR templates that
        break with unfamiliar invoice formats, the LLM-based extraction adapts to
        any layout. A new vendor with a completely different invoice format works
        on the first attempt.
      </p>

      <h2>What&apos;s Next</h2>
      <p>
        The client is now exploring expanding the automation to cover purchase order
        matching, vendor onboarding, and payment scheduling — building on the same
        AI agent architecture. Each extension follows the same pattern: automate the
        repetitive steps, keep humans at the decision points, and integrate deeply
        with the systems the team already uses.
      </p>
    </ArticleLayout>
  );
}
