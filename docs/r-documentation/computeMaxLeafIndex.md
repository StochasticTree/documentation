_C_o_m_p_u_t_e _a_n_d _r_e_t_u_r_n _t_h_e _l_a_r_g_e_s_t _p_o_s_s_i_b_l_e _l_e_a_f _i_n_d_e_x _c_o_m_p_u_t_a_b_l_e _b_y
'_c_o_m_p_u_t_e_F_o_r_e_s_t_L_e_a_f_I_n_d_i_c_e_s' _f_o_r _t_h_e _f_o_r_e_s_t_s _i_n _a _d_e_s_i_g_n_a_t_e_d _f_o_r_e_s_t
_s_a_m_p_l_e _c_o_n_t_a_i_n_e_r.

_D_e_s_c_r_i_p_t_i_o_n:

     Compute and return the largest possible leaf index computable by
     ‘computeForestLeafIndices’ for the forests in a designated forest
     sample container.

_U_s_a_g_e:

     computeMaxLeafIndex(model_object, covariates, forest_type, forest_inds = NULL)
     
_A_r_g_u_m_e_n_t_s:

model_object: Object of type ‘bartmodel’ or ‘bcf’ corresponding to a
          BART / BCF model with at least one forest sample

covariates: Covariates to use for prediction. Must have the same
          dimensions / column types as the data used to train a forest.

forest_type: Which forest to use from ‘model_object’. Valid inputs
          depend on the model type, and whether or not a

          *1. BART*

            • ‘'mean'’: Extracts leaf indices for the mean forest

            • ‘'variance'’: Extracts leaf indices for the variance
              forest

          *2. BCF*

            • ‘'prognostic'’: Extracts leaf indices for the prognostic
              forest

            • ‘'treatment'’: Extracts leaf indices for the treatment
              effect forest

            • ‘'variance'’: Extracts leaf indices for the variance
              forest

forest_inds: (Optional) Indices of the forest sample(s) for which to
          compute leaf indices. If not provided, this function will
          return leaf indices for every sample of a forest. This
          function uses 1-indexing, so the first forest sample
          corresponds to ‘forest_num = 1’, and so on.

_V_a_l_u_e:

     Vector containing the largest possible leaf index computable by
     ‘computeForestLeafIndices’ for the forests in a designated forest
     sample container.

