/* AUTO-GENERATED from data/lab-news.json by gen-lab-js.py — do not edit by hand. */
window.LAB_NEWS_DATA = {
  "_note": "Deasy Lab 'Lab News' feed: every publication (journal papers and preprints) and every news item from the last two years that includes Joseph O. Deasy or a current lab trainee (data/lab-members.json) as an author or subject. Items are appended by the weekly scheduled task after verification (each must have a direct URL). Separate from the complete publication archive (data/papers.json).",
  "updated": "2026-10-12",
  "window": "rolling 24 months on the site; older items kept and shown via 'Show older items'",
  "windowMonths": 24,
  "items": [
    {
      "id": "media-estro-newsletter-2026-predictive-models-interview",
      "type": "media",
      "title": "Predictive models and their validation in radiation oncology — an interview with Joe Deasy",
      "date": "2026-09",
      "venue": "ESTRO Newsletter (Physics corner)",
      "url": "https://www.estro.org/About/Newsroom/Newsletter/Physics/Predictive-models-and-their-validation-in-radiatio",
      "doi": null,
      "authorsShort": null,
      "people": [
        {
          "id": "deasy",
          "role": "subject"
        }
      ],
      "summary": "ESTRO's Physics newsletter features a video conversation with Joseph Deasy on predictive models and their validation in radiation oncology. He argues that dose-volume constraints should not be treated as simple go/no-go limits but replaced by predictive models that add context to radiotherapy planning, and explains why validating such models across institutions remains one of the field's biggest open challenges. The full conversation is on Vimeo (vimeo.com/1220871489).",
      "flag": "Exact publication date not shown on the ESTRO page; listed first in the Physics corner on 13 Sep 2026 — confirm issue month",
      "added": "2026-09-13"
    },
    {
      "id": "paper-10-1016-j-radonc-2026-111713",
      "type": "paper",
      "title": "External validation of dose to heart substructures and the association with non-cancer death after SBRT in stage I-II NSCLC patients",
      "date": "2026-07-26",
      "venue": "Radiother Oncol",
      "url": "https://doi.org/10.1016/j.radonc.2026.111713",
      "doi": "10.1016/j.radonc.2026.111713",
      "authorsShort": "Stam B, Wijsman R, Thor M, ... Sonke JJ",
      "people": [
        {
          "id": "deasy",
          "role": "co-author"
        }
      ],
      "summary": "Radiation to the heart is a known concern in lung cancer treatment. This study took a previously published model that links dose to specific heart structures (the left atrium and superior vena cava) with death from causes other than cancer after stereotactic body radiotherapy, and tested it in two independent groups of more than 200 early-stage lung cancer patients each. The model held up in the cohort that defined the outcome the same way, and a companion overall-survival model held up in both, supporting the idea that sparing these heart structures matters.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:42503335"
    },
    {
      "id": "paper-10-1016-j-radonc-2026-111712",
      "type": "paper",
      "title": "Clinical implementation of automated IMRT/VMAT planning for lung cancer radiation therapy using the expedited constrained hierarchical optimization (ECHO) system",
      "date": "2026-07-24",
      "venue": "Radiother Oncol",
      "url": "https://doi.org/10.1016/j.radonc.2026.111712",
      "doi": "10.1016/j.radonc.2026.111712",
      "authorsShort": "Jeong J, Huang Q, Zhou Y, ... Hong L",
      "people": [
        {
          "id": "deasy",
          "role": "co-author"
        }
      ],
      "summary": "ECHO is MSK's in-house system that automatically produces optimized radiotherapy plans from the tumor and normal-tissue contours and the clinical dose criteria. This paper reports its clinical roll-out for lung cancer: since 2021 more than 430 patients have been treated with ECHO IMRT plans and, since 2023, more than 90 with ECHO VMAT plans for lung SBRT. The automated plans gave more consistent tumor coverage than manual plans with similar normal-tissue sparing, and saved about an hour and a half of planner time per case.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:42498230"
    },
    {
      "id": "paper-10-1158-1078-0432-ccr-25-1216",
      "type": "paper",
      "title": "Radiation Oncology-Biology Integration Network: Bridging the Gap between Biological Research and Clinical Practice",
      "date": "2026-06-01",
      "venue": "Clin Cancer Res",
      "url": "https://doi.org/10.1158/1078-0432.ccr-25-1216",
      "doi": "10.1158/1078-0432.ccr-25-1216",
      "authorsShort": "Gregucci F, Lee-Poturalski C, Dirrim M, ... Formenti SC",
      "people": [
        {
          "id": "deasy",
          "role": "co-author"
        }
      ],
      "summary": "An overview of the NCI-funded Radiation Oncology-Biology Integration Network (ROBIN), a consortium of five centers — including the ImmunoRad center co-led by MSK — that uses omics technologies, data science, and clinically annotated patient samples to work out how tumors and normal tissues respond to radiotherapy. The review describes each center's translational programs, the network's commitment to standardized, shareable data, and its training mission for the next generation of radiation biologists.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:41941260"
    },
    {
      "id": "paper-10-21203-rs-3-rs-9695978-v1",
      "type": "paper",
      "title": "Adaptive and sequential cancer therapies emerge from treatment schedule optimization",
      "date": "2026-05-29",
      "venue": "Research Square (preprint)",
      "url": "https://doi.org/10.21203/rs.3.rs-9695978/v1",
      "doi": "10.21203/rs.3.rs-9695978/v1",
      "authorsShort": "Kocher CD, Deasy JO, Reed DR, ... Weistuch C",
      "people": [
        {
          "id": "deasy",
          "role": "co-author"
        }
      ],
      "summary": "Chemotherapy is usually given at the maximum tolerated dose as often as possible, but that is not always the best schedule. This preprint describes a simulated-annealing algorithm that, given a mathematical model of a patient's response to treatment, searches for the dosing schedule that best minimizes tumor burden or extends progression-free survival. On a simple model, only three one-drug schedules ever came out optimal — continuous therapy and two types of adaptive therapy — and for two drugs the algorithm could map which patients benefit from which schedule.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:PPR1241532"
    },
    {
      "id": "paper-10-1016-j-phro-2026-101003",
      "type": "paper",
      "title": "Optimal radiotherapy dose scheduling with variable fraction sizes and breaks via sequential mixed-integer convex programming",
      "date": "2026-05-26",
      "venue": "Phys Imaging Radiat Oncol",
      "url": "https://doi.org/10.1016/j.phro.2026.101003",
      "doi": "10.1016/j.phro.2026.101003",
      "authorsShort": "Fu A, Gouw Z, Jeong J, Deasy JO",
      "people": [
        {
          "id": "deasy",
          "role": "last/senior author"
        }
      ],
      "summary": "Radiotherapy is normally delivered in equal daily doses, but a tumor model that includes hypoxia and competition for resources suggests uneven schedules could work better. The authors turned schedule design into an optimization problem with limits on normal-tissue dose and solved it with a sequence of mixed-integer convex programs. The best schedules shared a pattern — a large initial \"primer\" dose, a one-week break to let oxygen-starved cells reoxygenate, then several small fractions and a final large one — and achieved a 12% higher modeled tumor control probability than the standard weekday schedule.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:42255163"
    },
    {
      "id": "paper-10-1016-j-adro-2026-102090",
      "type": "paper",
      "title": "Early Salivary Gland Shrinkage Is Associated With an Increased Risk of Acute Xerostomia in Head and Neck Cancer Radiation Therapy",
      "date": "2026-05-18",
      "venue": "Adv Radiat Oncol",
      "url": "https://doi.org/10.1016/j.adro.2026.102090",
      "doi": "10.1016/j.adro.2026.102090",
      "authorsShort": "Treechairusame T, Zhang P, Hu YC, ... Zhang P",
      "people": [
        {
          "id": "deasy",
          "role": "co-author"
        }
      ],
      "summary": "Using MSK's AWARE program, which tracks anatomy on weekly cone-beam CT scans during head and neck radiotherapy, the team looked at 165 patients to see whether early shrinkage of the salivary glands predicts dry mouth (xerostomia). Patients who developed acute xerostomia showed larger parotid and submandibular gland shrinkage in weeks two and three and had received higher mean doses to those glands. Lowering the parotid dose during the boost phase, and adapting the plan, reduced the risk.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:42382855"
    },
    {
      "id": "paper-10-1038-s41408-026-01486-y",
      "type": "paper",
      "title": "A differentiated effector T cell repertoire defines a functionally high-risk group of smoldering myeloma patients",
      "date": "2026-05-01",
      "venue": "Blood Cancer J",
      "url": "https://doi.org/10.1038/s41408-026-01486-y",
      "doi": "10.1038/s41408-026-01486-y",
      "authorsShort": "Firestone RS, Simhal AK, Akhlaghi T, ... Hultcrantz M",
      "people": [
        {
          "id": "simhal",
          "role": "co-author"
        },
        {
          "id": "deasy",
          "role": "co-author"
        }
      ],
      "summary": "A research letter reporting that patients with smoldering multiple myeloma whose circulating T cells are dominated by differentiated effector cells form a functionally high-risk group.",
      "added": "2026-09-13",
      "flag": "Summary based on title only; the letter has no indexed abstract",
      "source": "europepmc:42067559"
    },
    {
      "id": "paper-10-1016-j-radonc-2026-111531",
      "type": "paper",
      "title": "Deep learning on genome-wide association studies to predict the patient-specific risk of radiation-induced erectile dysfunction",
      "date": "2026-04-11",
      "venue": "Radiother Oncol",
      "url": "https://doi.org/10.1016/j.radonc.2026.111531",
      "doi": "10.1016/j.radonc.2026.111531",
      "authorsShort": "Oh JH, Auer P, Hall W, ... Kerns S",
      "people": [
        {
          "id": "deasy",
          "role": "co-author"
        }
      ],
      "summary": "Erectile dysfunction after prostate radiotherapy is common and hard to predict. Using genome-wide genetic data and clinical variables from 387 men in the GenePARE study, the authors trained a biologically informed deep-learning model (BioDeepGWAS) that reached an AUC of 0.75 on held-out patients and was well calibrated. Men in the highest-risk third had about twelve times the odds of the complication compared with the lowest third, and the model pointed to neurophysiological, hormonal, and blood-vessel pathways as drivers.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:41967608"
    },
    {
      "id": "paper-10-1109-tnse-2026-3682565",
      "type": "paper",
      "title": "Curvature on Graphs with Negative Edge Weights",
      "date": "2026-04-09",
      "venue": "IEEE Trans Netw Sci Eng",
      "url": "https://doi.org/10.1109/tnse.2026.3682565",
      "doi": "10.1109/tnse.2026.3682565",
      "authorsShort": "Grange D, Sun Y, Weistuch C, ... Georgiou T",
      "people": [
        {
          "id": "grange",
          "role": "first author"
        },
        {
          "id": "deasy",
          "role": "co-author"
        }
      ],
      "summary": "Discrete curvature measures such as Ollivier-Ricci curvature help identify fragile nodes and pathways in networks, but they assume every link is a kind of distance and ignore links that are inhibitory. This paper introduces the notions of balanced graphs and graph frustration to handle signed (promoting or inhibiting) edges, and defines new curvature-inspired fragility indices for unbalanced graphs. Tested on gene-regulatory and social networks, the new indices picked out critical edges better than commonly used alternatives.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:42064467"
    },
    {
      "id": "paper-10-1016-j-ijrobp-2026-02-237",
      "type": "paper",
      "title": "Integrating Genomic and Nongenomic Data to Stratify the Risk of Contralateral Breast Cancer After Radiation Therapy",
      "date": "2026-02-26",
      "venue": "Int J Radiat Oncol Biol Phys",
      "url": "https://doi.org/10.1016/j.ijrobp.2026.02.237",
      "doi": "10.1016/j.ijrobp.2026.02.237",
      "authorsShort": "Lee S, Shu X, Derkach A, ... Oh JH",
      "people": [
        {
          "id": "deasy",
          "role": "co-author"
        }
      ],
      "summary": "Women treated with radiotherapy for breast cancer have a raised risk of a second cancer in the other breast. Using the WECARE study (633 cases and 1,253 matched controls with genome-wide genotype data), the authors compared three ways of combining genetic and non-genetic information and found that a sequential, iterative integration using mixed-effect random forests worked best, with moderate discrimination (AUC 0.64) and an odds ratio of about 3.3 between the lowest- and highest-risk groups.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:41763494"
    },
    {
      "id": "paper-10-1016-j-phro-2026-100907",
      "type": "paper",
      "title": "Tumor-conditioned inter-patient registration using planning computed tomography for voxel-based analysis to predict radiation pneumonitis in lung cancer patients",
      "date": "2026-01-20",
      "venue": "Phys Imaging Radiat Oncol",
      "url": "https://doi.org/10.1016/j.phro.2026.100907",
      "doi": "10.1016/j.phro.2026.100907",
      "authorsShort": "Choi CMS, Jiang J, Mankuzhy NP, ... Veeraraghavan H",
      "people": [
        {
          "id": "deasy",
          "role": "co-author"
        }
      ],
      "summary": "To compare radiation dose maps across many lung cancer patients, images must be aligned without distorting the tumors. This study tested a deep-learning registration method (TRACER) that is aware of tumors against two alternatives in 240 patients, finding that it best preserved tumor volume and organ doses. Adding dose features from the resulting voxel-based analysis improved prediction of radiation pneumonitis compared with using mean lung dose alone.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:41631006"
    },
    {
      "id": "paper-10-3390-cancers18020273",
      "type": "paper",
      "title": "Tumor Microenvironment: Insights from Multiparametric MRI in Pancreatic Ductal Adenocarcinoma",
      "date": "2026-01-15",
      "venue": "Cancers (Basel)",
      "url": "https://doi.org/10.3390/cancers18020273",
      "doi": "10.3390/cancers18020273",
      "authorsShort": "Paudyal R, Russell J, Lekaye HC, ... Shukla-Dave A",
      "people": [
        {
          "id": "deasy",
          "role": "co-author"
        }
      ],
      "summary": "Pancreatic cancer is surrounded by dense stroma that blunts treatment. In this co-clinical study, mice with pancreatic tumors were scanned with diffusion-weighted and dynamic contrast-enhanced MRI before and after radiotherapy, and the imaging changes were correlated with tumor-cell counts on pathology; the same quantitative imaging measures were then shown to be obtainable in eleven patients using standard clinical MRI. The work supports using these imaging biomarkers to evaluate new drug combinations that target both tumor and stroma.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:41595193"
    },
    {
      "id": "paper-10-1158-1078-0432-ccr-25-0572",
      "type": "paper",
      "title": "Immune MRD Status Informs Tumor MRD Outcome Prognostication in Patients with Multiple Myeloma on Lenalidomide Maintenance",
      "date": "2025-11-01",
      "venue": "Clin Cancer Res",
      "url": "https://doi.org/10.1158/1078-0432.ccr-25-0572",
      "doi": "10.1158/1078-0432.ccr-25-0572",
      "authorsShort": "Firestone RS, Simhal AK, McAvoy D, ... Lesokhin AM",
      "people": [
        {
          "id": "simhal",
          "role": "co-author"
        }
      ],
      "summary": "Final results of a phase II trial of five years of continuous lenalidomide maintenance in multiple myeloma, together with profiling of T cells in the blood over the trial. Patients whose measurable residual disease reappeared had worse progression-free survival, yet most did not progress within two years. T-cell profiles rich in activated cytotoxic effector cells predicted early relapse while quiescent, naive-rich profiles predicted durable remission — an \"immune MRD\" signal that separated patients with early progression from those who stayed in remission despite MRD resurgence.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:40853874"
    },
    {
      "id": "paper-10-1016-j-csbj-2025-10-066",
      "type": "paper",
      "title": "Radiomic clustering using graph network techniques coupled with unbalanced optimal transport",
      "date": "2025-10-31",
      "venue": "Comput Struct Biotechnol J",
      "url": "https://doi.org/10.1016/j.csbj.2025.10.066",
      "doi": "10.1016/j.csbj.2025.10.066",
      "authorsShort": "Oh JH, Apte A, Veeraraghavan H, ... Deasy JO",
      "people": [
        {
          "id": "deasy",
          "role": "last/senior author"
        }
      ],
      "summary": "Radiomic datasets are often too small for standard machine learning. The authors built a regularized network model to find sub-networks of related image features and a graph-based k-means clustering that uses unbalanced optimal transport to group patients. Applied to CT radiomics and gene expression in head and neck and lung cancer, the method separated patients into groups with significantly different survival, and the groups differed in tumor immune-cell composition.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:41357300"
    },
    {
      "id": "paper-10-1101-2025-10-24-683878",
      "type": "paper",
      "title": "NetFlow: A Framework to Explore Topological Representations of High-Dimensional Biomedical Data",
      "date": "2025-10-24",
      "venue": "bioRxiv (preprint)",
      "url": "https://doi.org/10.1101/2025.10.24.683878",
      "doi": "10.1101/2025.10.24.683878",
      "authorsShort": "Elkin R, Oh JH, Simhal AK, Deasy JO",
      "people": [
        {
          "id": "simhal",
          "role": "co-author"
        },
        {
          "id": "deasy",
          "role": "last/senior author"
        }
      ],
      "summary": "NetFlow is an open computational framework for exploring high-dimensional and multi-modal biomedical data. It builds a graph of how samples relate to one another by combining a lineage-tracing-inspired pseudo-ordering with sparse similarity networks, works with small cohorts, supports multi-modal fusion, and provides interactive visualization. Across cancer datasets it refined clinically relevant subtypes and revealed more structured relationships than standard clustering and dimensionality-reduction methods.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:PPR1107767"
    },
    {
      "id": "paper-10-1016-j-phro-2025-100844",
      "type": "paper",
      "title": "Prospective validation of a pretreatment 18F-FDG PET/CT and mean lung dose model for early radiation pneumonitis",
      "date": "2025-09-27",
      "venue": "Phys Imaging Radiat Oncol",
      "url": "https://doi.org/10.1016/j.phro.2025.100844",
      "doi": "10.1016/j.phro.2025.100844",
      "authorsShort": "Thor M, Apte A, Grkovski M, ... Shaverdian N",
      "people": [
        {
          "id": "deasy",
          "role": "co-author"
        }
      ],
      "summary": "Early radiation pneumonitis after chemoradiotherapy can force lung cancer patients to stop consolidation immunotherapy. This study tested a previously published risk model, based on pretreatment FDG-PET uptake in the normal lungs and the mean lung dose, in an independent group of 50 patients. The model predicted early pneumonitis well (AUC 0.76 after refitting), and the authors derived dose and uptake thresholds that captured 25 of 27 cases across the combined cohorts.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:41090189"
    },
    {
      "id": "media-mskcc-2025-ai-radiation-treatment",
      "type": "media",
      "title": "How MSK Doctors Are Using AI To Improve Radiation Treatment",
      "date": "2025-09-26",
      "venue": "Memorial Sloan Kettering Cancer Center (MSK News)",
      "url": "https://www.mskcc.org/news/how-msk-doctors-are-improving-radiation-treatments-with-ai",
      "doi": null,
      "authorsShort": null,
      "people": [
        {
          "id": "deasy",
          "role": "quoted"
        }
      ],
      "summary": "An MSK feature on the artificial-intelligence models, led by Harini Veeraraghavan's group in Medical Physics, that help physicians outline tumors and organs, measure tumor volume in three dimensions, and spot treatment resistance early. Joseph Deasy is quoted noting that the technology now guides hundreds of radiotherapy treatments at MSK every day, an example of AI's positive impact already arriving in medicine.",
      "flag": null,
      "added": "2026-09-13"
    },
    {
      "id": "paper-10-1002-hem3-70218",
      "type": "paper",
      "title": "Elevated circulating tumor cells reflect high proliferation and genomic complexity in multiple myeloma",
      "date": "2025-09-23",
      "venue": "Hemasphere",
      "url": "https://doi.org/10.1002/hem3.70218",
      "doi": "10.1002/hem3.70218",
      "authorsShort": "Garces JJ, Diamond B, Sevcikova T, ... Jelinek T",
      "people": [
        {
          "id": "simhal",
          "role": "co-author"
        }
      ],
      "summary": "Circulating tumor cells in the blood are a known prognostic marker in newly diagnosed multiple myeloma, but it was unclear whether they simply reflect tumor burden. Analyzing 540 patients from the CoMMpass study and an external validation cohort, the authors found that high circulating tumor cell counts track with complex genomic features and proliferation-related gene expression, and outperform proliferation signatures as a prognostic marker.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:40995465"
    },
    {
      "id": "paper-10-1016-j-modpat-2025-100897",
      "type": "paper",
      "title": "Whole-Slide Imaging and Radiological Features Predict Clinical Outcomes in Patients With Neuroendocrine Tumors of the Lung",
      "date": "2025-09-22",
      "venue": "Mod Pathol",
      "url": "https://doi.org/10.1016/j.modpat.2025.100897",
      "doi": "10.1016/j.modpat.2025.100897",
      "authorsShort": "Yolchuyeva S, Ebrahimpour L, Lemaréchal Y, ... Manem VS",
      "people": [
        {
          "id": "ebrahimpour",
          "role": "co-author"
        }
      ],
      "summary": "Lung neuroendocrine tumors are rare and vary widely in behavior. In 83 patients, the authors built survival models from CT radiomics, features from digitized pathology slides, and clinical data. Combining pathology-derived features with clinical data gave the best performance (concordance index about 0.70 for overall survival), and harmonizing radiomic features across scanners did not help.",
      "added": "2026-09-13",
      "flag": "Published from Université Laval before the author joined the lab — confirm",
      "source": "europepmc:40992504"
    },
    {
      "id": "paper-10-1002-mp-18070",
      "type": "paper",
      "title": "Radiomics-based kidney lesion classification: Mitigating batch effect with nested combat harmonization",
      "date": "2025-09-01",
      "venue": "Med Phys",
      "url": "https://doi.org/10.1002/mp.18070",
      "doi": "10.1002/mp.18070",
      "authorsShort": "Ziasaeedi N, Lemaréchal Y, Agharazii M, ... Ebrahimpour L",
      "people": [
        {
          "id": "ebrahimpour",
          "role": "last/senior author"
        }
      ],
      "summary": "Incidentally found kidney masses need to be sorted into benign cysts and tumors. Using 599 contrast-enhanced CT cases from the public KiTS23 dataset, the authors compared six feature-selection methods and ten classifiers and applied Nested ComBat harmonization to correct for differences in slice thickness; harmonization raised the AUC by up to about 8 percentage points, reaching 0.95.",
      "added": "2026-09-13",
      "flag": "Published from Université Laval before the author joined the lab — confirm",
      "source": "europepmc:40891042"
    },
    {
      "id": "paper-10-1172-jci182555",
      "type": "paper",
      "title": "Age-dependent brain responses to mechanical stress determine resilience in a chronic lymphatic drainage impairment model",
      "date": "2025-07-15",
      "venue": "J Clin Invest",
      "url": "https://doi.org/10.1172/jci182555",
      "doi": "10.1172/jci182555",
      "authorsShort": "Gursky Z, Khan ZN, Koundal S, ... Benveniste H",
      "people": [
        {
          "id": "chen-xinan",
          "role": "co-author"
        }
      ],
      "summary": "Waste fluid from the brain drains to lymph nodes in the neck, but whether that drainage is necessary for normal brain function was unknown. Using dynamic contrast-enhanced MRI and computational fluid dynamics in rats, the authors found that blocking the deep cervical lymph nodes raised intracranial pressure and opened alternative drainage routes in young but not middle-aged animals, while both ages showed signs of low-grade inflammation and blood-brain-barrier stress in the cerebrospinal fluid.",
      "added": "2026-09-13",
      "flag": "Work from the author's Stony Brook / optimal-mass-transport lineage — confirm this is Xinan Chen",
      "source": "europepmc:40663395"
    },
    {
      "id": "paper-10-1038-s41746-025-01780-2",
      "type": "paper",
      "title": "Large language model trained on clinical oncology data predicts cancer progression",
      "date": "2025-07-02",
      "venue": "NPJ Digit Med",
      "url": "https://doi.org/10.1038/s41746-025-01780-2",
      "doi": "10.1038/s41746-025-01780-2",
      "authorsShort": "Zhu M, Lin H, Jiang J, ... Li A",
      "people": [
        {
          "id": "deasy",
          "role": "co-author"
        }
      ],
      "summary": "Woollie is an open-source large language model trained on real-world oncology data from MSK for lung, breast, prostate, pancreatic, and colorectal cancers and validated on data from UCSF. Reading nearly 40,000 radiology impression notes from about 4,000 patients, it predicted cancer progression with an AUROC of 0.97 on MSK data and 0.88 on UCSF data, and it outperformed ChatGPT on medical benchmarks.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:40604229"
    },
    {
      "id": "paper-10-1007-s10278-025-01554-y",
      "type": "paper",
      "title": "PARADIM: A Platform to Support Research at the Interface of Data Science and Medical Imaging",
      "date": "2025-06-03",
      "venue": "J Imaging Inform Med",
      "url": "https://doi.org/10.1007/s10278-025-01554-y",
      "doi": "10.1007/s10278-025-01554-y",
      "authorsShort": "Lemaréchal Y, Couture G, Pelletier F, ... Després P",
      "people": [
        {
          "id": "ebrahimpour",
          "role": "co-author"
        }
      ],
      "summary": "PARADIM is an open-source research platform for data science on medical images that follows FAIR principles and the DICOM standard. It handles user access, de-identification, storage, annotation, and model training and evaluation, records rich metadata for reproducibility, and can run large-scale pipelines such as automatic segmentation and dose calculation.",
      "added": "2026-09-13",
      "flag": "Published from Université Laval before the author joined the lab — confirm",
      "source": "europepmc:40461664"
    },
    {
      "id": "paper-10-1088-1361-6560-add9de",
      "type": "paper",
      "title": "Predicting and monitoring response to head and neck cancer radiotherapy using multimodality imaging and radiobiological digital twin simulations",
      "date": "2025-05-27",
      "venue": "Phys Med Biol",
      "url": "https://doi.org/10.1088/1361-6560/add9de",
      "doi": "10.1088/1361-6560/add9de",
      "authorsShort": "Aliotta E, Jeong J, Paudyal R, ... Deasy JO",
      "people": [
        {
          "id": "deasy",
          "role": "last/senior author"
        }
      ],
      "summary": "A radiobiological \"digital twin\" was built for each head and neck cancer patient by combining a mechanistic tumor model with pretreatment diffusion MRI and FDG and FMISO (hypoxia) PET, then updated with weekly tumor-volume measurements during chemoradiotherapy. Personalized models predicted the course of tumor shrinkage better than a generic population model, and predictions using baseline imaging plus week-one data improved prediction of later locoregional recurrence (AUC 0.83 versus 0.77 for week-one volume alone).",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:40378867"
    },
    {
      "id": "paper-10-1038-s41467-025-59584-7",
      "type": "paper",
      "title": "Multi-institutional atlas of brain metastases informs spatial modeling for precision imaging and personalized therapy",
      "date": "2025-05-15",
      "venue": "Nat Commun",
      "url": "https://doi.org/10.1038/s41467-025-59584-7",
      "doi": "10.1038/s41467-025-59584-7",
      "authorsShort": "Barrios J, Porter E, Capaldi DPI, ... Morin O",
      "people": [
        {
          "id": "deasy",
          "role": "co-author"
        }
      ],
      "summary": "A multi-institutional atlas of 13,067 brain metastases from 3,065 patients, the largest of its kind. Metastases cluster near the grey-white matter junction in well-perfused regions, with histology-dependent differences (lung and breast cancers often spread to the cerebellum; deep brain structures are relatively spared). The authors propose a probabilistic risk map that could let whole-brain radiotherapy target high-risk regions while sparing areas important for cognition.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:40374598"
    },
    {
      "id": "paper-10-1016-j-phro-2025-100769",
      "type": "paper",
      "title": "Predicting the hypoxic volume of head and neck tumors from fluorodeoxyglucose positron emission tomography images using artificial intelligence",
      "date": "2025-04-17",
      "venue": "Phys Imaging Radiat Oncol",
      "url": "https://doi.org/10.1016/j.phro.2025.100769",
      "doi": "10.1016/j.phro.2025.100769",
      "authorsShort": "Zhao W, Grkovski M, Schoder H, ... Veeraraghavan H",
      "people": [
        {
          "id": "deasy",
          "role": "co-author"
        }
      ],
      "summary": "Hypoxia imaging with FMISO-PET helps guide head and neck radiotherapy but is rarely available. The authors trained a generative adversarial network to synthesize FMISO-like hypoxia maps directly from routine FDG-PET/CT images of 134 patients. The predicted hypoxic volumes correlated strongly with the measured ones (R of about 0.96 and 0.91 in two test sets), far better than simply scaling the FDG images.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:40584457"
    },
    {
      "id": "paper-10-1002-mp-17807",
      "type": "paper",
      "title": "FLASH radiotherapy: Paradigm shift or a passing fad?",
      "date": "2025-04-04",
      "venue": "Med Phys",
      "url": "https://doi.org/10.1002/mp.17807",
      "doi": "10.1002/mp.17807",
      "authorsShort": "Seco J, Deasy JO, Das IJ",
      "people": [
        {
          "id": "deasy",
          "role": "co-author"
        }
      ],
      "summary": "A Medical Physics point/counterpoint debate on whether FLASH radiotherapy — ultra-high-dose-rate delivery — represents a paradigm shift or a passing fad.",
      "added": "2026-09-13",
      "flag": "Summary based on title only; no indexed abstract (editorial format)",
      "source": "europepmc:40184041"
    },
    {
      "id": "paper-10-1093-bioinformatics-btaf093",
      "type": "paper",
      "title": "ORCO: Ollivier-Ricci Curvature-Omics-an unsupervised method for analyzing robustness in biological systems",
      "date": "2025-03-01",
      "venue": "Bioinformatics",
      "url": "https://doi.org/10.1093/bioinformatics/btaf093",
      "doi": "10.1093/bioinformatics/btaf093",
      "authorsShort": "Simhal AK, Weistuch C, Murgas K, ... Deasy JO",
      "people": [
        {
          "id": "simhal",
          "role": "first author"
        },
        {
          "id": "grange",
          "role": "co-author"
        },
        {
          "id": "deasy",
          "role": "last/senior author"
        }
      ],
      "summary": "ORCO is an open-source Python package that combines omics data with a network of known gene or protein interactions and computes Ollivier-Ricci curvature for each interaction, an edge-based measure of network robustness. The approach has revealed regulatory modules and candidate therapeutic targets in several cancers and in neurodevelopmental disorders, and applies to any data that can be represented as a network.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:40036763"
    },
    {
      "id": "paper-10-1038-s41408-025-01230-y",
      "type": "paper",
      "title": "High WEE1 expression is independently linked to poor survival in multiple myeloma",
      "date": "2025-02-20",
      "venue": "Blood Cancer J",
      "url": "https://doi.org/10.1038/s41408-025-01230-y",
      "doi": "10.1038/s41408-025-01230-y",
      "authorsShort": "Simhal AK, Firestone RS, Oh JH, ... Deasy JO",
      "people": [
        {
          "id": "simhal",
          "role": "first author"
        },
        {
          "id": "deasy",
          "role": "last/senior author"
        }
      ],
      "summary": "Current prognostic scores in multiple myeloma rely on disease burden and a handful of genetic changes. Analyzing 659 patients in the CoMMpass dataset and two independent trial datasets, the authors found that high expression of the cell-cycle regulator WEE1 marks a group with much shorter progression-free survival, independently of known risk markers and linked to disrupted p53 signaling. The result suggests WEE1 expression could be used clinically and that WEE1 inhibitors deserve preclinical testing in myeloma.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:39979284"
    },
    {
      "id": "paper-10-1038-s41523-025-00725-y",
      "type": "paper",
      "title": "Biological correlates associated with high-risk breast cancer patients identified using a computational method",
      "date": "2025-01-29",
      "venue": "NPJ Breast Cancer",
      "url": "https://doi.org/10.1038/s41523-025-00725-y",
      "doi": "10.1038/s41523-025-00725-y",
      "authorsShort": "Oh JH, Pareja F, Elkin R, ... Deasy JO",
      "people": [
        {
          "id": "deasy",
          "role": "last/senior author"
        }
      ],
      "summary": "Following up on a breast cancer subgroup with poor prognosis that the lab had identified by integrating multi-omic data, this study characterized what makes it different. The high-risk tumors scored higher on three hypoxia gene signatures, had a distinct immune-cell composition, and, within the basal subtype, had fewer tumor-infiltrating lymphocytes — pointing to hypoxia and low immune infiltration as drivers of the poor outcomes.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:39875417"
    },
    {
      "id": "paper-10-1101-2025-01-23-632803",
      "type": "paper",
      "title": "The fractionation dependence of tumor control in proton therapy for early-stage non-small cell lung cancer",
      "date": "2025-01-24",
      "venue": "bioRxiv (preprint)",
      "url": "https://doi.org/10.1101/2025.01.23.632803",
      "doi": "10.1101/2025.01.23.632803",
      "authorsShort": "Jeong J, Taasti VT, Jackson A, ... Deasy JO",
      "people": [
        {
          "id": "deasy",
          "role": "last/senior author"
        }
      ],
      "summary": "The extra effectiveness of protons over photons (their RBE) is usually assumed not to depend on how treatment is fractionated. Modeling all published proton-therapy outcomes for early-stage lung cancer (399 patients), the authors found an RBE of about 1.08–1.11 for short courses of 12 fractions or fewer but only 0.82–0.89 for courses of 20–25 fractions, suggesting protons and photons differ in their underlying radiobiology.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:PPR970645"
    },
    {
      "id": "paper-10-1101-2025-01-19-633756",
      "type": "paper",
      "title": "Artificial Intelligence Apps for Medical Image Analysis using pyCERR and Cancer Genomics Cloud",
      "date": "2025-01-22",
      "venue": "bioRxiv (preprint)",
      "url": "https://doi.org/10.1101/2025.01.19.633756",
      "doi": "10.1101/2025.01.19.633756",
      "authorsShort": "Apte AP, LoCastro E, Iyer A, ... Deasy JO",
      "people": [
        {
          "id": "deasy",
          "role": "last/senior author"
        }
      ],
      "summary": "This preprint describes a cloud-based framework for running AI analyses on medical images built around pyCERR, the Python port of the lab's CERR platform, and the Cancer Genomics Cloud. Users can organize multi-modal imaging data, install AI models with their dependencies, run segmentation, radiomics, DCE-MRI, and dose-volume analyses, and bring results back for review.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:PPR969266"
    },
    {
      "id": "paper-10-1038-s41598-024-84193-7",
      "type": "paper",
      "title": "A benchmark of deep learning approaches to predict lung cancer risk using national lung screening trial cohort",
      "date": "2025-01-11",
      "venue": "Sci Rep",
      "url": "https://doi.org/10.1038/s41598-024-84193-7",
      "doi": "10.1038/s41598-024-84193-7",
      "authorsShort": "Jiang Y, Ebrahimpour L, Després P, Manem VS",
      "people": [
        {
          "id": "ebrahimpour",
          "role": "co-author"
        }
      ],
      "summary": "Many deep-learning models claim to predict lung cancer risk from CT scans, but they are rarely compared head to head. Using 253 patients from the National Lung Screening Trial, the authors benchmarked ten 3D and eleven 2D state-of-the-art models; 3D models did better (best AUROC 0.86 versus 0.79), and pretraining on radiology-specific datasets gave no clear advantage over general-purpose pretraining.",
      "added": "2026-09-13",
      "flag": "Published from Université Laval before the author joined the lab — confirm",
      "source": "europepmc:39799226"
    },
    {
      "id": "paper-10-1093-bfgp-elaf004",
      "type": "paper",
      "title": "Pregnancy-specific glycoproteins as potential drug targets for female lung adenocarcinoma patients",
      "date": "2025-01-01",
      "venue": "Brief Funct Genomics",
      "url": "https://doi.org/10.1093/bfgp/elaf004",
      "doi": "10.1093/bfgp/elaf004",
      "authorsShort": "Oh JH, Rizzuto G, Elkin R, ... Deasy JO",
      "people": [
        {
          "id": "deasy",
          "role": "last/senior author"
        }
      ],
      "summary": "Pregnancy-specific glycoproteins (PSGs) are normally made by the placenta, but their expression in tumors has been linked to poor survival. Analyzing TCGA data across cancer types, the authors found the strongest sex difference in lung adenocarcinoma: PSG expression predicted worse survival in women but not men, a finding validated in the independent CPTAC dataset and linked to KRAS signaling. PSGs may therefore be sex-specific drug targets in female lung cancer patients.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:40257008"
    },
    {
      "id": "paper-10-1101-2024-12-11-628056",
      "type": "paper",
      "title": "Data-driven synapse classification reveals a logic of glutamate receptor diversity",
      "date": "2024-12-13",
      "venue": "bioRxiv (preprint)",
      "url": "https://doi.org/10.1101/2024.12.11.628056",
      "doi": "10.1101/2024.12.11.628056",
      "authorsShort": "Micheva KD, Simhal AK, Schardt J, ... Owen SF",
      "people": [
        {
          "id": "simhal",
          "role": "co-author"
        }
      ],
      "summary": "Using multiplexed super-resolution imaging of single synapses in mouse cortex, this preprint shows that glutamatergic synapses fall into subclasses that mirror the biochemical categories of their receptor subunits. Two subclasses match expectations from synaptic plasticity — large AMPA-receptor-rich synapses that may be potentiated and small NMDA-receptor-rich \"silent\" synapses — and synapse structure predicted receptor content better than the identity of the parent neuron.",
      "added": "2026-09-13",
      "flag": "Work from the author's earlier neuroscience collaboration (Stanford / UNC), not a lab project — confirm inclusion",
      "source": "europepmc:PPR954777"
    },
    {
      "id": "paper-10-1093-bjr-tqae187",
      "type": "paper",
      "title": "Sensitivity of CT-derived radiomic features to extraction libraries and gray-level discretization in the context of immune biomarker discovery",
      "date": "2024-12-01",
      "venue": "Br J Radiol",
      "url": "https://doi.org/10.1093/bjr/tqae187",
      "doi": "10.1093/bjr/tqae187",
      "authorsShort": "Ebrahimpour L, Lemaréchal Y, Yolchuyeva S, ... Manem VSK",
      "people": [
        {
          "id": "ebrahimpour",
          "role": "first author"
        }
      ],
      "summary": "Radiomic features can depend on which software extracted them. In 164 lung cancer patients treated with immune checkpoint inhibitors, the authors compared features from two libraries (Pyradiomics and RaCat) and found that even the direction of association with survival, PD-L1, and CD8 counts depended on the library, while intensity-based features were the most stable across gray-level discretization settings.",
      "added": "2026-09-13",
      "flag": "Published from Université Laval before the author joined the lab — confirm",
      "source": "europepmc:39287013"
    },
    {
      "id": "paper-10-1002-mp-17536",
      "type": "paper",
      "title": "Tumor aware recurrent inter-patient deformable image registration of computed tomography scans with lung cancer",
      "date": "2024-11-26",
      "venue": "Med Phys",
      "url": "https://doi.org/10.1002/mp.17536",
      "doi": "10.1002/mp.17536",
      "authorsShort": "Jiang J, Choi CMS, Thor M, ... Veeraraghavan H",
      "people": [
        {
          "id": "deasy",
          "role": "co-author"
        }
      ],
      "summary": "Comparing radiotherapy doses across patients requires aligning their CT scans without deforming the tumors. TRACER is a deep-learning registration method built on recurrent 3D convolutional LSTM layers that is conditioned on tumor segmentations and trained without manual labels. Across three datasets it aligned normal tissues accurately while preserving tumors far better than competing methods.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:39589333"
    },
    {
      "id": "paper-10-1016-j-isci-2024-111463",
      "type": "paper",
      "title": "Divergent brain solute clearance in rat models of cerebral amyloid angiopathy and Alzheimer's disease",
      "date": "2024-11-23",
      "venue": "iScience",
      "url": "https://doi.org/10.1016/j.isci.2024.111463",
      "doi": "10.1016/j.isci.2024.111463",
      "authorsShort": "Koundal S, Chen X, Gursky Z, ... Benveniste H",
      "people": [
        {
          "id": "chen-xinan",
          "role": "co-author"
        }
      ],
      "summary": "Measuring how the brain clears waste is difficult, which has fueled debate about the glymphatic system's role in neurodegeneration. Extending the group's regularized optimal mass transport analysis of dynamic contrast-enhanced MRI to an unbalanced form that separates influx from clearance, the authors found abnormal transport in rats with severe cerebral amyloid angiopathy but normal transport in an Alzheimer's model with moderate plaque burden.",
      "added": "2026-09-13",
      "flag": "Work from the author's Stony Brook / optimal-mass-transport lineage — confirm this is Xinan Chen",
      "source": "europepmc:39720539"
    },
    {
      "id": "paper-10-1038-s41598-024-76625-1",
      "type": "paper",
      "title": "Normal tissue transcriptional signatures for tumor-type-agnostic phenotype prediction",
      "date": "2024-11-08",
      "venue": "Sci Rep",
      "url": "https://doi.org/10.1038/s41598-024-76625-1",
      "doi": "10.1038/s41598-024-76625-1",
      "authorsShort": "Weistuch C, Murgas KA, Zhu J, ... Deasy JO",
      "people": [
        {
          "id": "deasy",
          "role": "last/senior author"
        }
      ],
      "summary": "Cancers may reuse the gene-expression programs of normal tissues. Starting from normal-tissue transcriptomes, the authors used non-negative matrix factorization to define six transcriptomic \"archetypes\" that, in combination, describe both normal tissues and a wide range of tumors. Enrichment of these archetypes correlated with survival and drug sensitivity independently of actionable DNA alterations, and metastatic HR+/HER2- breast tumors adopted signatures resembling the tissue they invaded.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:39516498"
    },
    {
      "id": "paper-10-1101-2024-11-05-24316768",
      "type": "paper",
      "title": "An Optimal Mass Transport Model for the Analysis of DCE-MRI and its Application to Breast Cancer Treatment Response",
      "date": "2024-11-07",
      "venue": "medRxiv (preprint)",
      "url": "https://doi.org/10.1101/2024.11.05.24316768",
      "doi": "10.1101/2024.11.05.24316768",
      "authorsShort": "Chen X, Huang W, Shukla-Dave A, ... Deasy JO",
      "people": [
        {
          "id": "chen-xinan",
          "role": "first author"
        },
        {
          "id": "deasy",
          "role": "last/senior author"
        }
      ],
      "summary": "Standard analysis of dynamic contrast-enhanced MRI ignores how contrast agent physically flows between voxels. This preprint introduces urOMT, an unbalanced regularized optimal mass transport model that quantifies and visualizes net flow speed, flux, and rates of contrast entering and leaving a tumor, and applies it to 153 scans from 39 breast cancer patients receiving neoadjuvant chemotherapy, where the flow metrics showed patterns that may relate to pathological complete response.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:PPR935866"
    },
    {
      "id": "paper-10-1016-j-semradonc-2024-07-012",
      "type": "paper",
      "title": "Data Science Opportunities To Improve Radiotherapy Planning and Clinical Decision Making",
      "date": "2024-10-01",
      "venue": "Semin Radiat Oncol",
      "url": "https://doi.org/10.1016/j.semradonc.2024.07.012",
      "doi": "10.1016/j.semradonc.2024.07.012",
      "authorsShort": "Deasy JO",
      "people": [
        {
          "id": "deasy",
          "role": "first author"
        }
      ],
      "summary": "A review of how data science can improve radiotherapy planning and clinical decisions. It argues that personalizing treatment depends on joining physical planning with predictive models of tumor control and normal-tissue complications, that genomics, radiomics, dosiomics, and deep learning will improve those models, and that mechanistic patient-specific simulations — digital twins — could guide adaptive radiotherapy.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:39271273"
    },
    {
      "id": "paper-10-1002-cam4-70359",
      "type": "paper",
      "title": "Differential Radiomics-Based Signature Predicts Lung Cancer Risk Accounting for Imaging Parameters in NLST Cohort",
      "date": "2024-10-01",
      "venue": "Cancer Med",
      "url": "https://doi.org/10.1002/cam4.70359",
      "doi": "10.1002/cam4.70359",
      "authorsShort": "Ebrahimpour L, Després P, Manem VSK",
      "people": [
        {
          "id": "ebrahimpour",
          "role": "first author"
        }
      ],
      "summary": "Using the National Lung Screening Trial, this nested case-control study of 462 positive screens tested whether changes in CT radiomic features between two yearly scans (delta radiomics) improve lung cancer risk prediction. Delta features outperformed baseline features, oversampling of the minority class consistently helped, and harmonizing for slice thickness and reconstruction kernel made little overall difference; the best models reached a test score of 0.76.",
      "added": "2026-09-13",
      "flag": "Published from Université Laval before the author joined the lab — confirm",
      "source": "europepmc:39463128"
    },
    {
      "id": "paper-10-1001-jamanetworkopen-2024-36407",
      "type": "paper",
      "title": "Tumor Hypoxia on 18F-fluoromisonidazole Positron Emission Tomography and Distant Metastasis From Head and Neck Squamous Cell Carcinoma",
      "date": "2024-09-03",
      "venue": "JAMA Netw Open",
      "url": "https://doi.org/10.1001/jamanetworkopen.2024.36407",
      "doi": "10.1001/jamanetworkopen.2024.36407",
      "authorsShort": "Gui C, Wray R, Schöder H, ... Lee NY",
      "people": [
        {
          "id": "deasy",
          "role": "co-author"
        }
      ],
      "summary": "Distant metastasis is now the main way head and neck cancer treatment fails. In 281 patients from two prospective trials who had FMISO-PET hypoxia imaging before and during chemoradiotherapy, the authors examined whether tumor hypoxia predicts later distant spread, using competing-risk models with death as a competing event.",
      "added": "2026-09-13",
      "flag": "Abstract truncated in the index; results section not reviewed — confirm summary",
      "source": "europepmc:39348119"
    },
    {
      "id": "paper-10-33594-000000726",
      "type": "paper",
      "title": "ASMase is Essential for the Immune Response to Partial-Tumor Radiation Exposure",
      "date": "2024-09-01",
      "venue": "Cell Physiol Biochem",
      "url": "https://doi.org/10.33594/000000726",
      "doi": "10.33594/000000726",
      "authorsShort": "Mathieu M, Nepali PR, Russell J, ... Haimovitz-Friedman A",
      "people": [
        {
          "id": "askarifirouzjaei",
          "role": "co-author"
        },
        {
          "id": "deasy",
          "role": "co-author"
        }
      ],
      "summary": "Earlier work from these labs showed that irradiating only half of a tumor can still control the whole tumor through an immune response, and that endothelial acid sphingomyelinase (ASMase) governs tumor radiocurability. Here, in Lewis lung carcinoma models, hemi-irradiation controlled tumors in normal mice but not in ASMase-knockout mice or when ASMase was blocked pharmacologically, and the immune changes (CD8+ T cells, ICAM-1, STING activation) appeared only when ASMase was present.",
      "added": "2026-09-13",
      "flag": null,
      "source": "europepmc:39248192"
    },
    {
      "id": "paper-10-1093-oons-kvag016",
      "type": "paper",
      "title": "Targeting the Metabolic Niche: Vulnerabilities and Opportunities in Brain Metastases",
      "date": "2026-09-25",
      "venue": "Oxford Open Neuroscience",
      "url": "https://doi.org/10.1093/oons/kvag016",
      "doi": "10.1093/oons/kvag016",
      "authorsShort": "Chesebro AG, Kocher CD, Grange D, ... Weistuch C",
      "people": [
        {
          "id": "grange",
          "role": "co-author"
        },
        {
          "id": "deasy",
          "role": "co-author"
        }
      ],
      "summary": "This review proposes a three-part framework for how cancer cells colonize the brain — gaining vascular access, finding metabolic fuel, and escaping immune surveillance — and argues that metabolism is the least exploited of the three in the clinic. It describes how lung, breast and melanoma metastases each pair a characteristic metabolic program with characteristic locations in the brain, and how targeted metabolic therapy, prediction informed by the primary cancer, and longitudinal modeling could bring metabolism into precision care for brain metastases.",
      "added": "2026-10-12",
      "flag": null,
      "source": "crossref"
    },
    {
      "id": "paper-10-1002-hem3-70473",
      "type": "paper",
      "title": "Dynamic risk stratification in smoldering multiple myeloma: Integrating evolving biomarkers with the 2/20/20 Model",
      "date": "2026-09-23",
      "venue": "Hemasphere",
      "url": "https://doi.org/10.1002/hem3.70473",
      "doi": "10.1002/hem3.70473",
      "authorsShort": "Akhlaghi T, Nemirovsky D, Maclachlan KH, ... Hultcrantz M",
      "people": [
        {
          "id": "simhal",
          "role": "co-author"
        }
      ],
      "summary": "Smoldering multiple myeloma is a precursor condition whose risk of progressing to active myeloma varies widely, and current risk models use only baseline features. Analyzing 323 MSK patients diagnosed between 2002 and 2019, the authors tracked serial M-protein and free light chain measurements during the first year after diagnosis to define evolving risk factors and integrate them with the standard 2/20/20 model, improving risk stratification.",
      "added": "2026-10-12",
      "flag": null,
      "source": "europepmc:42781377"
    },
    {
      "id": "paper-10-1016-j-bspc-2026-111229",
      "type": "paper",
      "title": "Tumor-aware augmentation with task-guided attention analysis improves rectal cancer segmentation from magnetic resonance images",
      "date": "2026-08-21",
      "venue": "Biomed Signal Process Control",
      "url": "https://doi.org/10.1016/j.bspc.2026.111229",
      "doi": "10.1016/j.bspc.2026.111229",
      "authorsShort": "Rangnekar A, Miranda J, Horvat N, ... Deasy JO",
      "people": [
        {
          "id": "deasy",
          "role": "last/senior author"
        }
      ],
      "summary": "A deep-learning study on segmenting rectal cancers in MRI, in which tumor-aware data augmentation and task-guided attention analysis are reported to improve segmentation performance.",
      "added": "2026-10-12",
      "flag": "Summary based on title only; abstract not reviewed (publisher page requires a human check)",
      "source": "crossref"
    },
    {
      "id": "award-miccai-flare-2026-outstanding-winner-panseg-msk",
      "type": "award",
      "title": "MICCAI FLARE 2026 Outstanding Winner Award — Team PANSEG_MSK wins the pan-cancer CT segmentation challenge, first of 190 teams",
      "date": "2026-10",
      "venue": "MICCAI 2026 FLARE challenge",
      "url": "news/flare-2026.html",
      "doi": null,
      "authorsShort": "Nayak L, Ebrahimpour L, Jiang J (PANSEG_MSK)",
      "people": [
        {
          "id": "nayak",
          "role": "recipient"
        },
        {
          "id": "ebrahimpour",
          "role": "recipient"
        }
      ],
      "summary": "Team PANSEG_MSK — postdocs Lopamudra Nayak and Leyla Ebrahimpour with faculty collaborator Jue Jiang — won the MICCAI 2026 FLARE challenge (Fast, Low-resource, Accurate, Robust and Effectual Medical Image Analysis) outright, ranking first of 190 teams and receiving its Outstanding Winner Award. The challenge called for fully automatic segmentation of tumors anywhere in the body on CT, trained on more than 17,000 scans in which only the primary lesion was labelled, under strict time and memory limits. Their entry, \"Coarse-Spacing nnU-Net with Tversky Loss for Pan-Cancer CT Segmentation\", uses a compact four-stage nnU-Net v2 with a Dice + cross-entropy + Tversky loss, runs in about three seconds per scan with roughly 1.4 GB of GPU memory, and the code is open source.",
      "added": "2026-10-12",
      "flag": "Confirm the award date — the certificate carries none; MICCAI 2026 ran 27 Sept – 1 Oct 2026 in Strasbourg",
      "source": "write-up on this site (news/flare-2026.html) from the certificate FLARE2026-T1-006 and team slides supplied by Joseph; competition page https://www.codabench.org/competitions/7149/",
      "images": [
        {
          "src": "assets/img/news/flare2026-certificate.jpg",
          "alt": "MICCAI 2026 FLARE Outstanding Winner Award certificate for Lopamudra Nayak, Leyla Ebrahimpour and Jue Jiang, team PANSEG_MSK, for the paper 'Coarse-Spacing nnU-Net with Tversky Loss for Pan-Cancer CT Segmentation'",
          "caption": "The FLARE 2026 Outstanding Winner Award certificate, signed by challenge chair Dr. Jun Ma."
        },
        {
          "src": "assets/img/news/flare2026-codabench.jpg",
          "alt": "Codabench page of the FLARE 2026 challenge 'Foundation Models for Pan-Cancer Segmentation in CT Images', organized by Jun Ma, showing 190 participants and 389 submissions",
          "caption": "The competition on Codabench: Foundation Models for Pan-Cancer Segmentation in CT Images — 190 participants, 389 submissions (screenshot).",
          "href": "https://www.codabench.org/competitions/7149/"
        }
      ]
    }
  ]
};
