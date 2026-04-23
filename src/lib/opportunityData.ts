import {
  Shield,
  Building2,
  Megaphone,
  HeartPulse,
  TrendingUp,
  Stethoscope,
  Landmark,
} from "lucide-react";

export interface OpportunityVertical {
  id: string;
  label: string;
  icon: typeof Shield;
  description: string;
  offerings: string[];
}

export const verticals: OpportunityVertical[] = [
  {
    id: "insurance",
    label: "Insurance",
    icon: Shield,
    description:
      "Access 100+ top-rated carriers across life, annuity, and long-term care. Build a book of business with true product diversity and competitive compensation.",
    offerings: [
      "Term & Permanent Life",
      "Fixed & Indexed Annuities",
      "Long-Term Care",
      "Disability Income",
    ],
  },
  {
    id: "commercial",
    label: "Commercial P&C",
    icon: Building2,
    description:
      "Protect businesses with comprehensive property and casualty solutions. Tap into a high-value market with strong renewal income and deep client relationships.",
    offerings: [
      "General Liability",
      "Commercial Property",
      "Workers' Compensation",
      "Professional Liability",
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: Megaphone,
    description:
      "Leverage Valor's marketing engine — lead generation, brand support, and digital tools — so you can focus on what you do best: building relationships.",
    offerings: [
      "Lead Generation Programs",
      "Co-Branded Materials",
      "Digital Marketing Support",
      "Seminar & Event Support",
    ],
  },
  {
    id: "ancillary",
    label: "Ancillary",
    icon: HeartPulse,
    description:
      "Expand your practice with ancillary products that fill gaps in your clients' coverage and create additional revenue streams.",
    offerings: [
      "Dental & Vision",
      "Critical Illness",
      "Accident Coverage",
      "Hospital Indemnity",
    ],
  },
  {
    id: "advisory",
    label: "Advisory",
    icon: TrendingUp,
    description:
      "Deliver institutional-grade investment management and financial planning. Access model portfolios, planning tools, and compliance support through our RIA.",
    offerings: [
      "Fee-Based Planning",
      "Model Portfolios",
      "Retirement Plans",
      "Wealth Management",
    ],
  },
  {
    id: "health",
    label: "Health",
    icon: Stethoscope,
    description:
      "Serve individuals and families with health insurance solutions — a growing market with year-round opportunity and strong client retention.",
    offerings: [
      "ACA Marketplace",
      "Medicare Supplements",
      "Medicare Advantage",
      "Short-Term Medical",
    ],
  },
  {
    id: "alternatives",
    label: "Alt. Investments",
    icon: Landmark,
    description:
      "Differentiate your practice with alternative investment solutions for high-net-worth clients seeking diversification beyond traditional markets.",
    offerings: [
      "Real Estate Funds",
      "Private Equity Access",
      "Structured Products",
      "Non-Traded REITs",
    ],
  },
];
