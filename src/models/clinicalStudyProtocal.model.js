import mongoose from "mongoose";

const clinicalStudySchema = new mongoose.Schema(
  {
    study_identification: {
      study_title: { type: String, required: true },
      protocol_number: { type: String, required: true, unique: true },
      version_number_date: { type: String, required: true },
      sponsor_name: { type: String, required: true },
      cro: { type: String }
    },
    study_overview: {
      therapeutic_area: { type: String, required: true },
      disease_indication: { type: String, required: true },
      study_phase: { type: String, enum: ["Phase I", "Phase II", "Phase III", "Phase IV"], required: true },
      study_type: { type: String, enum: ["Interventional", "Observational", "Expanded Access"], required: true },
      randomization: { type: Boolean, required: true },
      blinding: { type: String, enum: ["Open-Label", "Single-Blind", "Double-Blind"], required: true },
      primary_objective: { type: String, required: true },
      secondary_objectives: { type: String }
    },
    target_population: {
      patient_population_description: { type: String, required: true },
      key_inclusion_criteria: [{ type: String }],
      key_exclusion_criteria: [{ type: String }]
    },
    study_treatments: {
      investigational_product: {
        name: { type: String, required: true },
        dose_schedule: { type: String, required: true },
        route_of_administration: { type: String, required: true }
      },
      comparator: {
        name: { type: String },
        dose_schedule: { type: String },
        route_of_administration: { type: String }
      },
      concomitant_medications_allowed: { type: String }
    },
    study_endpoints: {
      primary_endpoints: [{ type: String }],
      secondary_endpoints: [{ type: String }],
      exploratory_endpoints: [{ type: String }]
    },
    study_design_details: {
      number_of_arms: { type: Number, required: true },
      stratification_factors: { type: String },
      study_duration: {
        screening_period: { type: String },
        treatment_period: { type: String },
        follow_up_period: { type: String }
      },
      sample_size_total: { type: Number, required: true },
      number_of_sites: { type: Number, required: true }
    },
    study_assessments: {
      efficacy_assessments: [{ type: String }],
      safety_assessments: [{ type: String }],
      adverse_event_monitoring: { type: String },
      laboratory_tests: { type: String },
      vital_signs: { type: String },
      survival_analysis: {
        overall_survival: { type: String },
        progression_free_survival: { type: String }
      }
    },
    statistical_considerations: {
      statistical_hypothesis: { type: String },
      sample_size_justification: { type: String },
      interim_analysis_planned: { type: Boolean },
      handling_of_missing_data: { type: String }
    },
    regulatory_ethical_requirements: {
      countries_for_submission: [{ type: String }],
      planned_start_date: { type: String, required: true },
      irb_approvals_required: { type: Boolean, required: true },
      informed_consent_required: { type: Boolean, required: true }
    },
    study_monitoring_logistics: {
      data_collection_method: { type: String, enum: ["Electronic Data Capture (EDC)", "Paper-Based CRF"], required: true },
      monitoring_frequency: { type: String },
      on_site_or_remote: { type: String, enum: ["On-Site", "Remote"], required: true },
      key_contacts: {
        sponsor_contact: { type: String, required: true },
        cro_contact: { type: String }
      }
    },
    additional_comments: { type: String },
  },
  { timestamps: true }
);

const ClinicalStudy = mongoose.model("ClinicalStudy", clinicalStudySchema);
export default ClinicalStudy;
