import Link from "next/link";
import { Layout } from "@/components/Layout";

export default function IndexPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold mb-4">
        Healthcare Website & Claim Workflow Assessment
      </h1>
      <p className="mb-6 text-slate-700">
        HIPAA-aware audits for clinics, billing companies, and healthcare SaaS.
        We check clinical documentation, claim workflows, compliance, patient
        communication, content accuracy, and end-to-end submission.
      </p>
      <Link
        href="/report"
        className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-slate-800"
      >
        Run Health Report
      </Link>
    </Layout>
  );
}
