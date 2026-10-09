export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceBody {
  /** Two or three sentences opening the page. */
  intro: string;
  whoItIsFor: string[];
  included: { title: string; description: string }[];
  process: { title: string; description: string }[];
  faqs: ServiceFaq[];
}

/*
 * The long-form body of each service page, keyed by slug.
 *
 * Split out from `services.ts` deliberately. The header imports the service index for its
 * menu, so anything living alongside it would ship in the main bundle to every visitor,
 * including people who never open a service page. This module is imported only by the
 * service route, so it loads with that route.
 *
 * Content rule: these describe what each engagement covers and the statutory steps
 * involved. They carry no fee, no turnaround time and no claim about the firm's track
 * record, because none of that has been supplied. See CLAUDE.md.
 */
export const SERVICE_DETAILS: Record<string, ServiceBody> = {
  'foreign-subsidiary-registration': {
    intro:
      'An overseas company that wants its own presence in India usually incorporates a private limited company as a wholly owned or majority owned subsidiary. The incorporation itself is only part of the work: the parent has to be documented, the investment has to be reported to the Reserve Bank of India, and the entity has to be ready to file from its first year.',
    whoItIsFor: [
      'Overseas companies opening their first Indian entity',
      'Groups moving from a distributor or contractor arrangement to their own company',
      'Businesses that need an Indian entity to sign contracts, hire staff or invoice locally',
    ],
    included: [
      { title: 'Structure and entry route', description: 'Whether the investment falls under the automatic route or needs prior approval, and what that means for your shareholding plan.' },
      { title: 'Parent company documentation', description: 'Board resolutions, charter documents and identity papers, apostilled or consularised as the jurisdiction requires.' },
      { title: 'Name reservation and incorporation', description: 'Filing with the Ministry of Corporate Affairs, including digital signatures and director identification numbers.' },
      { title: 'Post-incorporation registrations', description: 'PAN, TAN, bank account opening support, and GST and professional tax registration where applicable.' },
      { title: 'Investment reporting', description: 'Reporting the share allotment to the Reserve Bank of India through the prescribed FC-GPR filing.' },
    ],
    process: [
      { title: 'Scope the entry', description: 'We confirm the activity, the shareholding and the entry route before anything is filed.' },
      { title: 'Collect and legalise documents', description: 'We give the parent a single checklist, including what must be apostilled abroad.' },
      { title: 'Reserve the name', description: 'We check availability against the companies register and trade marks before applying.' },
      { title: 'Incorporate', description: 'We file the incorporation application and follow it through to the certificate of incorporation.' },
      { title: 'Open for business', description: 'Bank account, tax registrations and the first regulatory reporting, so the entity is ready to trade.' },
    ],
    faqs: [
      { question: 'Does the parent company need an Indian director?', answer: 'A private limited company must have at least two directors, and at least one of them must be resident in India. The remaining directors can be based overseas.' },
      { question: 'Can the parent hold one hundred percent of the shares?', answer: 'In most sectors, yes. A small number of sectors carry caps or conditions, which is why the entry route is confirmed before incorporation rather than after.' },
      { question: 'What happens after incorporation?', answer: 'The company has annual filings with the Ministry of Corporate Affairs, income tax obligations, and reporting to the Reserve Bank of India for foreign investment. We set these out as a calendar at handover.' },
    ],
  },
  'private-limited-company': {
    intro:
      'A private limited company is the structure most Indian businesses choose when they expect to take on investors, issue employee equity or grow beyond the founders. It carries more compliance than a proprietorship or an LLP, and in exchange it gives limited liability and a share structure investors recognise.',
    whoItIsFor: [
      'Founders who expect to raise external investment',
      'Teams that want to issue equity to employees or co-founders',
      'Businesses where limited liability matters to customers or suppliers',
    ],
    included: [
      { title: 'Structure advice', description: 'An honest comparison with an LLP or a One Person Company before you commit, including the compliance each carries.' },
      { title: 'Digital signatures and director numbers', description: 'Obtained for every proposed director.' },
      { title: 'Name reservation', description: 'Checked against the companies register and existing trade marks.' },
      { title: 'Incorporation filing', description: 'Memorandum and articles of association drafted for your business, not a generic template.' },
      { title: 'Tax registrations', description: 'PAN and TAN, with GST registration where the business needs it.' },
    ],
    process: [
      { title: 'Confirm the structure', description: 'We talk through ownership, funding plans and compliance appetite first.' },
      { title: 'Prepare the paperwork', description: 'Identity and address documents for every director and shareholder.' },
      { title: 'Reserve the name', description: 'Two options are submitted so a rejection does not cost a full cycle.' },
      { title: 'File for incorporation', description: 'Including the constitutional documents and the declarations each subscriber signs.' },
      { title: 'Set up for compliance', description: 'Statutory registers, the first board meeting, and the filing calendar for year one.' },
    ],
    faqs: [
      { question: 'How many people do I need?', answer: 'At least two directors and two shareholders. The same two people can hold both roles, and at least one director must be resident in India.' },
      { question: 'Is a private limited company more expensive to maintain?', answer: 'It carries more annual compliance than an LLP, including a statutory audit regardless of turnover. That is the trade for a structure investors and lenders are comfortable with.' },
      { question: 'Can I convert later?', answer: 'Conversions between structures are possible but rarely free of friction. It is worth choosing deliberately at the start.' },
    ],
  },
  'llp-registration': {
    intro:
      'A limited liability partnership gives partners the protection of limited liability without the full compliance load of a company. It suits professional practices and businesses run by a small group of partners who do not plan to issue shares to outside investors.',
    whoItIsFor: [
      'Professional practices and consultancies',
      'Partner-run businesses with no plans to raise equity',
      'Ventures that want limited liability with lighter annual compliance',
    ],
    included: [
      { title: 'Suitability check', description: 'Whether an LLP actually fits, or whether your funding plans point to a company.' },
      { title: 'Digital signatures and partner numbers', description: 'Obtained for every designated partner.' },
      { title: 'Name reservation and incorporation', description: 'Filed with the Ministry of Corporate Affairs.' },
      { title: 'LLP agreement', description: 'Drafted around your profit sharing, decision rights and exit terms, then filed within the statutory window.' },
      { title: 'Tax registrations', description: 'PAN and TAN, with GST registration where applicable.' },
    ],
    process: [
      { title: 'Agree the terms', description: 'Capital, profit share, management and exit, settled before drafting.' },
      { title: 'Prepare partner documents', description: 'Identity and address proof for each designated partner.' },
      { title: 'Reserve the name', description: 'Checked for availability and conflicts.' },
      { title: 'Incorporate', description: 'Filed through to the certificate of incorporation.' },
      { title: 'File the agreement', description: 'The LLP agreement must be filed within the prescribed period after incorporation.' },
    ],
    faqs: [
      { question: 'How many partners are required?', answer: 'At least two designated partners, and at least one of them must be resident in India.' },
      { question: 'Does an LLP need an audit?', answer: 'An LLP is only required to have its accounts audited once turnover or contribution crosses the prescribed thresholds. We confirm where you sit each year.' },
      { question: 'Can a foreign national be a partner?', answer: 'Yes, subject to the foreign investment rules that apply to LLPs, which differ from those for companies.' },
    ],
  },
  'one-person-company': {
    intro:
      'A One Person Company lets a single founder operate through a company rather than as a sole proprietor, with the limited liability that follows. It is a practical first structure for a solo business that expects to grow into a private limited company later.',
    whoItIsFor: [
      'Solo founders who want limited liability',
      'Consultants and small businesses moving on from a proprietorship',
      'Founders who expect to convert to a private limited company as they grow',
    ],
    included: [
      { title: 'Structure advice', description: 'Where a One Person Company helps, and where a proprietorship or private limited company would serve you better.' },
      { title: 'Nominee documentation', description: 'A One Person Company must name a nominee, and their consent is part of the filing.' },
      { title: 'Incorporation', description: 'Digital signature, director identification number, name reservation and the incorporation filing.' },
      { title: 'Tax registrations', description: 'PAN and TAN, with GST registration where applicable.' },
      { title: 'Compliance calendar', description: 'The annual filings a One Person Company carries, set out from day one.' },
    ],
    process: [
      { title: 'Confirm eligibility', description: 'Not every founder or business activity qualifies; we check before filing.' },
      { title: 'Name the nominee', description: 'Including their written consent, which the incorporation application requires.' },
      { title: 'Reserve the name', description: 'Checked against the register and existing marks.' },
      { title: 'Incorporate', description: 'Filed through to the certificate of incorporation.' },
      { title: 'Set up the first year', description: 'Registers, board records and the filing calendar.' },
    ],
    faqs: [
      { question: 'Who can set up a One Person Company?', answer: 'A natural person who is an Indian citizen. The same person may incorporate only one such company, and the nominee is subject to the same condition.' },
      { question: 'Why is a nominee needed?', answer: 'The nominee steps in if the sole member dies or becomes incapable of contracting, so the company continues rather than failing with its owner.' },
      { question: 'Can it become a private limited company?', answer: 'Yes. Conversion is a defined process, and it becomes mandatory once the company crosses the prescribed thresholds.' },
    ],
  },
  'annual-company-compliance': {
    intro:
      'Every company carries a cycle of board meetings, statutory registers and filings with the Registrar of Companies, whether or not it traded. Missing them carries penalties that accrue daily, and they are the first thing a buyer or an investor looks at in diligence.',
    whoItIsFor: [
      'Companies that want one firm holding the whole annual cycle',
      'Entities whose records have drifted and need to be brought current',
      'Overseas parents who need visibility of what their Indian entity has filed',
    ],
    included: [
      { title: 'Board and general meetings', description: 'Notices, agendas, minutes and the resolutions each meeting has to record.' },
      { title: 'Statutory registers', description: 'Members, directors, charges and related party transactions, kept in the prescribed form.' },
      { title: 'Annual filings', description: 'Financial statements and the annual return filed with the Registrar of Companies within their due dates.' },
      { title: 'Director disclosures', description: 'The annual declarations every director has to make, collected and recorded.' },
      { title: 'A filing calendar', description: 'What is due, when, and what we need from you in advance of each date.' },
    ],
    process: [
      { title: 'Review where you stand', description: 'We start by checking what has been filed and what has not.' },
      { title: 'Close any gaps', description: 'Late filings are regularised before the new cycle begins.' },
      { title: 'Run the meeting cycle', description: 'Board meetings scheduled and documented through the year.' },
      { title: 'Prepare and file', description: 'Financial statements and the annual return, filed on time.' },
      { title: 'Report back', description: 'A record of everything filed, in a form you can hand to a lender or an investor.' },
    ],
    faqs: [
      { question: 'Does a dormant company still have to file?', answer: 'Yes. A company that has not traded still files its annual return and financial statements, and penalties for non-filing apply regardless of activity.' },
      { question: 'What happens if filings are late?', answer: 'Additional fees accrue by the day, and prolonged default can lead to the company being struck off and directors being disqualified.' },
      { question: 'Can you take over part-way through a year?', answer: 'Yes. We begin with a review of the existing records so we know exactly what we are inheriting.' },
    ],
  },
  'fema-and-rbi-reporting': {
    intro:
      'Money crossing India’s border carries reporting obligations under the Foreign Exchange Management Act. Share issues to a non-resident, transfers between residents and non-residents, and the annual return on foreign liabilities and assets all have their own forms and their own deadlines.',
    whoItIsFor: [
      'Indian companies with overseas shareholders',
      'Startups that have taken foreign investment',
      'Groups moving shares between resident and non-resident holders',
    ],
    included: [
      { title: 'Share allotment reporting', description: 'Reporting an issue of shares to a non-resident in the prescribed FC-GPR filing.' },
      { title: 'Transfer reporting', description: 'Reporting transfers between residents and non-residents in form FC-TRS.' },
      { title: 'Annual return on foreign liabilities and assets', description: 'Prepared and filed for companies that have received foreign investment.' },
      { title: 'Valuation support', description: 'Coordinating the valuation certificate the pricing guidelines require.' },
      { title: 'Position review', description: 'Checking past filings, since unreported transactions have a way of surfacing during diligence.' },
    ],
    process: [
      { title: 'Map the transaction', description: 'What moved, between whom, and which reporting it triggers.' },
      { title: 'Assemble the evidence', description: 'Inward remittance advice, valuation certificate and board approvals.' },
      { title: 'File within the window', description: 'Each form has its own deadline, counted from its own trigger date.' },
      { title: 'Track acknowledgement', description: 'Filed is not the same as accepted; we follow it to acknowledgement.' },
      { title: 'Keep the annual cycle', description: 'The annual return follows the same calendar every year once investment is on the books.' },
    ],
    faqs: [
      { question: 'What happens if a filing was missed?', answer: 'Late filings are regularised through the prescribed route, which can carry a compounding application. Addressing it deliberately is far better than it emerging during diligence.' },
      { question: 'Is a valuation always needed?', answer: 'Issues and transfers involving a non-resident are subject to pricing guidelines, which generally require a valuation from a qualified professional.' },
      { question: 'Who has to file the annual return on foreign liabilities and assets?', answer: 'Companies that have received foreign direct investment or made overseas investment file it annually, whether or not there was activity in the year.' },
    ],
  },
  'transfer-pricing': {
    intro:
      'Where an Indian entity transacts with a related party abroad, the price has to stand up as one unrelated parties would have agreed. That position needs documenting contemporaneously and certifying, and it is one of the most commonly examined areas in an Indian tax assessment.',
    whoItIsFor: [
      'Indian subsidiaries buying from or selling to their overseas parent',
      'Groups with shared services, royalties or intra-group financing',
      'Companies facing a transfer pricing question in an assessment',
    ],
    included: [
      { title: 'Transaction mapping', description: 'Identifying every international and specified domestic transaction with a related party.' },
      { title: 'Benchmarking', description: 'Selecting the method and comparables that support the price actually charged.' },
      { title: 'Documentation', description: 'The study prepared contemporaneously rather than reconstructed after a notice arrives.' },
      { title: 'Accountant’s report', description: 'The certification in Form 3CEB that accompanies the return.' },
      { title: 'Assessment support', description: 'Responding to transfer pricing queries with the documentation already in place.' },
    ],
    process: [
      { title: 'Map related party flows', description: 'Goods, services, royalties, interest and cost allocations.' },
      { title: 'Choose the method', description: 'Selected on the facts, and the reasoning recorded.' },
      { title: 'Benchmark', description: 'Comparables drawn and tested, with the search documented.' },
      { title: 'Document and certify', description: 'The study and the accountant’s report, ready ahead of the filing date.' },
      { title: 'Hold the position', description: 'The same documentation answers queries later.' },
    ],
    faqs: [
      { question: 'Does a small volume of related party transactions still need this?', answer: 'Certification requirements are driven by the existence and value of specified transactions, not by the size of the company. We confirm what applies to your facts.' },
      { question: 'When should the study be prepared?', answer: 'Contemporaneously, before the filing deadline for the relevant year. A study written after a notice arrives carries much less weight.' },
      { question: 'Do master file and country-by-country reporting apply to us?', answer: 'Those obligations are driven by group thresholds. We check them as part of scoping rather than assuming either way.' },
    ],
  },
  'cfo-services': {
    intro:
      'Plenty of businesses need the judgement of a finance lead long before they can justify the salary of one. A part-time engagement covers the reporting, the controls and the planning that a founder or an overseas parent would otherwise be doing between other things.',
    whoItIsFor: [
      'Growing businesses without a full-time finance lead',
      'Overseas parents who need a trusted pair of eyes on the Indian entity',
      'Companies preparing for fundraising, a lender or a transaction',
    ],
    included: [
      { title: 'Management reporting', description: 'A monthly pack that answers how the business is actually performing, not just what the ledger says.' },
      { title: 'Cash flow planning', description: 'Forecasting, working capital and the funding runway.' },
      { title: 'Budgets and variance', description: 'A budget that is revisited against actuals rather than filed away.' },
      { title: 'Controls', description: 'Approval limits, segregation of duties and the processes that keep errors small.' },
      { title: 'Transaction readiness', description: 'Getting the numbers and the records into the state a diligence process expects.' },
    ],
    process: [
      { title: 'Review the current state', description: 'Books, reporting, controls and what the leadership actually needs to see.' },
      { title: 'Agree the cadence', description: 'What gets reported, how often, and to whom.' },
      { title: 'Build the reporting pack', description: 'Designed around your decisions, not a standard template.' },
      { title: 'Run the cycle', description: 'Monthly close, review and the conversation that follows it.' },
      { title: 'Plan ahead', description: 'Budgets, scenarios and funding needs, revisited as the business moves.' },
    ],
    faqs: [
      { question: 'How much time does this take?', answer: 'It is scoped to the business. Some engagements are a monthly review cycle, others are closer to weekly during a transaction.' },
      { question: 'Does this replace our accountant?', answer: 'No. Bookkeeping produces the record; this is the layer that interprets it and makes decisions from it. We can do both.' },
      { question: 'Can you work with an overseas parent’s reporting calendar?', answer: 'Yes. Group reporting deadlines and formats are part of scoping.' },
    ],
  },
  'accounting-and-bookkeeping': {
    intro:
      'Reliable books are what every other obligation rests on. When the ledger is current and reconciled, tax returns, GST filings and the annual accounts become routine; when it is not, every deadline turns into a scramble.',
    whoItIsFor: [
      'Businesses without an in-house accounts team',
      'Companies whose books have fallen behind',
      'Overseas parents who need Indian books that reconcile to group reporting',
    ],
    included: [
      { title: 'Transaction recording', description: 'Sales, purchases, expenses and payroll entries, kept current rather than caught up quarterly.' },
      { title: 'Bank and ledger reconciliation', description: 'Reconciled monthly, so differences are found while they are still explainable.' },
      { title: 'Accounts payable and receivable', description: 'Ageing tracked, with the follow-up that collections actually need.' },
      { title: 'Periodic financial statements', description: 'Prepared on a schedule that suits your reporting, not only at year end.' },
      { title: 'Audit and filing support', description: 'Schedules and documentation handed over in the form the auditor and the filings require.' },
    ],
    process: [
      { title: 'Set up the ledger', description: 'A chart of accounts that fits the business and the reporting it has to produce.' },
      { title: 'Agree the document flow', description: 'How invoices, bank statements and expenses reach us each month.' },
      { title: 'Record and reconcile', description: 'The monthly cycle, closed on a fixed date.' },
      { title: 'Report', description: 'Statements and the schedules supporting them.' },
      { title: 'Feed the filings', description: 'GST, withholding tax and the annual accounts all draw on the same closed books.' },
    ],
    faqs: [
      { question: 'Which software do you work in?', answer: 'We work in the system you already use where that is practical, and recommend one where you are starting fresh.' },
      { question: 'Can you bring books that are months behind up to date?', answer: 'Yes. A catch-up is scoped separately from the ongoing cycle, because the work involved is different.' },
      { question: 'Do you handle statutory audit as well?', answer: 'Independence rules limit who can audit books they have maintained. We will tell you plainly where that line falls for your engagement.' },
    ],
  },
  'payroll-management': {
    intro:
      'Payroll is the one process employees notice immediately when it goes wrong. It also carries its own cycle of withholding tax, provident fund and professional tax obligations, each with a separate deadline and a separate return.',
    whoItIsFor: [
      'Companies hiring their first employees in India',
      'Businesses that have outgrown running payroll on a spreadsheet',
      'Overseas parents who need Indian payroll handled locally',
    ],
    included: [
      { title: 'Monthly payroll processing', description: 'Salary computation, deductions and payslips issued to employees.' },
      { title: 'Tax withholding', description: 'Tax deducted at source on salaries, deposited and reported in the quarterly returns.' },
      { title: 'Statutory contributions', description: 'Provident fund, employee state insurance and professional tax, where they apply.' },
      { title: 'Employee tax documents', description: 'Form 16 and the annual statements employees need to file their own returns.' },
      { title: 'Joiners and leavers', description: 'Onboarding, full and final settlement, and the records each requires.' },
    ],
    process: [
      { title: 'Set up the payroll', description: 'Salary structure, applicable registrations and the monthly calendar.' },
      { title: 'Collect inputs', description: 'Attendance, variable pay and employee declarations, on a fixed cut-off.' },
      { title: 'Process and review', description: 'Computed, checked and sent for approval before anything is paid.' },
      { title: 'Deposit and file', description: 'Withheld tax and contributions deposited, returns filed on their due dates.' },
      { title: 'Close the year', description: 'Annual statements and employee tax certificates issued.' },
    ],
    faqs: [
      { question: 'When do provident fund obligations begin?', answer: 'They are driven by headcount and wage thresholds. We confirm the position for your business rather than registering by default.' },
      { question: 'Can you handle employees in more than one state?', answer: 'Yes. Professional tax in particular varies by state, and that is part of the setup.' },
      { question: 'Do employees deal with you directly?', answer: 'Only if you want them to. Most engagements route employee queries through one contact on your side.' },
    ],
  },
  'gst-registration': {
    intro:
      'Goods and Services Tax registration brings a monthly and annual return cycle with it, and input credit depends on the discipline of that cycle. Getting the registration right, in the right states, is what makes the rest of it routine.',
    whoItIsFor: [
      'Businesses crossing the registration threshold',
      'Companies supplying across state lines or exporting',
      'Entities whose GST filings have fallen behind',
    ],
    included: [
      { title: 'Registration', description: 'Including multi-state registration where you have a place of business in more than one state.' },
      { title: 'Monthly and quarterly returns', description: 'Outward supplies and the summary return, filed on their due dates.' },
      { title: 'Input credit reconciliation', description: 'Your purchase records reconciled against what suppliers have actually reported.' },
      { title: 'Annual return', description: 'The annual return and reconciliation statement where required.' },
      { title: 'Notices and queries', description: 'Drafting responses to departmental correspondence.' },
    ],
    process: [
      { title: 'Confirm liability', description: 'Whether registration is required, voluntary or not yet triggered, and in which states.' },
      { title: 'Register', description: 'Application, clarifications and the registration certificate.' },
      { title: 'Set up the cycle', description: 'Invoice formats, record keeping and the monthly calendar.' },
      { title: 'File and reconcile', description: 'Returns filed, credit reconciled, differences chased while they are still fixable.' },
      { title: 'Close the year', description: 'The annual return, reconciled to the books.' },
    ],
    faqs: [
      { question: 'When is registration mandatory?', answer: 'It is driven by turnover thresholds, which differ by state and by the nature of the supply, and by specific triggers such as inter-state supply. We confirm your position before registering.' },
      { question: 'Do exporters need to register?', answer: 'Exports are treated as zero-rated supplies, and registration is generally needed to claim refunds or supply under a bond or letter of undertaking.' },
      { question: 'What if input credit does not match?', answer: 'Credit depends on suppliers reporting correctly. Monthly reconciliation is what keeps mismatches small enough to resolve.' },
    ],
  },
  'income-tax-returns': {
    intro:
      'An income tax return is the visible part of a year-round obligation that also includes advance tax, withholding and, for many businesses, a tax audit. Treated as a single cycle rather than a March deadline, it produces fewer surprises.',
    whoItIsFor: [
      'Companies, LLPs and partnership firms',
      'Business owners, professionals and salaried individuals',
      'Non-residents with Indian income or an Indian entity',
    ],
    included: [
      { title: 'Return preparation and filing', description: 'For the entity type and income sources that actually apply to you.' },
      { title: 'Advance tax', description: 'Estimated and scheduled across the year, so interest is not the first sign of a problem.' },
      { title: 'Withholding tax returns', description: 'Quarterly returns for tax deducted at source, and the certificates that follow.' },
      { title: 'Tax audit support', description: 'Where the statutory audit requirement under the income tax law is triggered.' },
      { title: 'Notices and assessments', description: 'Responding to departmental correspondence with the supporting records in place.' },
    ],
    process: [
      { title: 'Review the year', description: 'Income sources, deductions and anything unusual, before the forms are opened.' },
      { title: 'Reconcile', description: 'Books against the tax credit statement and the annual information statement.' },
      { title: 'Compute', description: 'Including the position taken on anything open to interpretation, documented.' },
      { title: 'File and verify', description: 'Filed and verified within the deadline, not on it.' },
      { title: 'Follow through', description: 'Refunds tracked, notices answered.' },
    ],
    faqs: [
      { question: 'When does a tax audit apply?', answer: 'It is triggered by turnover or receipts crossing prescribed limits, with different limits for business and profession and relief where most transactions are digital. We confirm it on your figures.' },
      { question: 'What if I have foreign income or assets?', answer: 'They have to be disclosed, and non-disclosure carries serious consequences. Treaty relief may apply, which is worth examining rather than assuming.' },
      { question: 'Can a late return still be filed?', answer: 'A belated return can generally be filed within the prescribed window, with interest and a late fee. Some benefits, such as carrying forward certain losses, can be lost.' },
    ],
  },
  'compliance-rescue': {
    intro:
      'Filings fall behind for ordinary reasons: a founder was busy, an accountant left, a parent company did not realise the Indian entity had its own calendar. The position is almost always recoverable, and it gets more expensive the longer it sits.',
    whoItIsFor: [
      'Companies with overdue filings with the Registrar of Companies',
      'Businesses behind on GST or income tax returns',
      'Entities that have discovered a gap during diligence',
    ],
    included: [
      { title: 'Position review', description: 'A clear statement of what is outstanding, across every authority, before anything is filed.' },
      { title: 'Exposure estimate', description: 'The additional fees, interest and penalties the position carries as it stands.' },
      { title: 'A sequencing plan', description: 'Some filings depend on others, so the order matters.' },
      { title: 'Filing the backlog', description: 'Carried through to acknowledgement, not just submitted.' },
      { title: 'Preventing a repeat', description: 'A calendar, with responsibility for each date set out explicitly.' },
    ],
    process: [
      { title: 'Establish the facts', description: 'What was filed, what was not, and what the records actually show.' },
      { title: 'Quantify', description: 'So the decision to proceed is made with the cost known.' },
      { title: 'Sequence', description: 'Dependencies first, then the rest in order.' },
      { title: 'File', description: 'Backlog cleared and acknowledgements collected.' },
      { title: 'Hand over a calendar', description: 'With the next twelve months mapped.' },
    ],
    faqs: [
      { question: 'Will there be penalties?', answer: 'Almost certainly, and they generally accrue with time. We quantify the exposure before you commit so there are no surprises.' },
      { question: 'Can a struck-off company be restored?', answer: 'Restoration is possible through a defined process before the relevant tribunal. Whether it is worth pursuing depends on the company’s assets and obligations.' },
      { question: 'Will you tell the authorities what went wrong?', answer: 'Filings are made accurately and on the facts. Where a regularisation route requires an explanation, we draft it with you.' },
    ],
  },
  'business-valuation': {
    intro:
      'A valuation is needed at specific moments: issuing shares, transferring them between residents and non-residents, planning a transaction, or supporting a position in a filing. The purpose shapes the method, so the first question is always what the valuation is for.',
    whoItIsFor: [
      'Companies issuing shares to investors',
      'Groups transferring shares across borders',
      'Businesses preparing for a sale, a merger or a fundraise',
    ],
    included: [
      { title: 'Purpose and basis', description: 'What the valuation is for, and which basis and method that calls for.' },
      { title: 'Financial analysis', description: 'Historical performance, projections and the assumptions behind them, tested rather than taken as given.' },
      { title: 'Method selection', description: 'Income, market or asset based, with the choice reasoned and recorded.' },
      { title: 'The report', description: 'In the form the regulation or the counterparty requires.' },
      { title: 'Follow-through', description: 'Supporting the filings or the negotiation the valuation feeds into.' },
    ],
    process: [
      { title: 'Define the purpose', description: 'Regulatory filing, transaction or planning, because each leads somewhere different.' },
      { title: 'Collect and test', description: 'Financials, forecasts, cap table and the agreements that affect value.' },
      { title: 'Analyse', description: 'Method applied, assumptions documented.' },
      { title: 'Report', description: 'Issued in the required form, with the reasoning visible.' },
      { title: 'Support the filing', description: 'Where the valuation accompanies a regulatory submission.' },
    ],
    faqs: [
      { question: 'Who is permitted to issue the valuation?', answer: 'It depends on the purpose. Certain valuations must come from a registered valuer or a specified professional, and we confirm which applies before starting.' },
      { question: 'How long does a valuation stay usable?', answer: 'Regulations attach their own validity periods for specific filings, and a material change in the business can make a report stale sooner.' },
      { question: 'Can one report serve several purposes?', answer: 'Sometimes, but not always. A report prepared for a regulatory filing may not be what a buyer expects, and the reverse is also true.' },
    ],
  },
  'trademark-registration': {
    intro:
      'A trade mark gives you the right to stop others using a confusingly similar name in the classes you register. The search that precedes the application matters as much as the filing: it is far cheaper to discover a conflict before you have printed signage.',
    whoItIsFor: [
      'Businesses launching a brand or a product name',
      'Companies that have grown attached to a name they never registered',
      'Groups protecting an existing overseas mark in India',
    ],
    included: [
      { title: 'Availability search', description: 'Against the register and existing marks, before anything is filed.' },
      { title: 'Class selection', description: 'Classes chosen for what the business actually sells now and plans to sell.' },
      { title: 'Application', description: 'Filed with the supporting documents and the user details the form requires.' },
      { title: 'Objections and oppositions', description: 'Drafting replies to examination reports and responding to oppositions.' },
      { title: 'Through to registration', description: 'Followed from filing to the registration certificate.' },
    ],
    process: [
      { title: 'Search', description: 'Conflicts identified while changing course is still cheap.' },
      { title: 'Choose classes', description: 'Under the international classification, matched to your goods and services.' },
      { title: 'File', description: 'The application submitted with its supporting evidence.' },
      { title: 'Respond', description: 'Examination objections answered within their deadlines.' },
      { title: 'Register', description: 'Through publication and any opposition to the certificate.' },
    ],
    faqs: [
      { question: 'Can I use a mark before it is registered?', answer: 'Yes, and use builds rights of its own. Registration makes those rights far easier to enforce.' },
      { question: 'How many classes do I need?', answer: 'One per category of goods or services. Filing in classes you do not trade in adds cost without adding protection.' },
      { question: 'Does an overseas registration cover India?', answer: 'No. Protection is territorial, though an international application route may be available depending on where the mark is already registered.' },
    ],
  },
};
