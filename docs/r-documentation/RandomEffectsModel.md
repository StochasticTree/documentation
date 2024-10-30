_T_h_e _c_o_r_e "_m_o_d_e_l" _c_l_a_s_s _f_o_r _s_a_m_p_l_i_n_g _r_a_n_d_o_m _e_f_f_e_c_t_s.

_D_e_s_c_r_i_p_t_i_o_n:

     Stores current model state, prior parameters, and procedures for
     sampling from the conditional posterior of each parameter.

_P_u_b_l_i_c _f_i_e_l_d_s:

     ‘rfx_model_ptr’ External pointer to a C++
          StochTree::RandomEffectsModel class

     ‘num_groups’ Number of groups in the random effects model

     ‘num_components’ Number of components (i.e. dimension of basis) in
          the random effects model

_M_e_t_h_o_d_s:

  _P_u_b_l_i_c _m_e_t_h_o_d_s:

         • ‘RandomEffectsModel$new()’

         • ‘RandomEffectsModel$sample_random_effect()’

         • ‘RandomEffectsModel$predict()’

         • ‘RandomEffectsModel$set_working_parameter()’

         • ‘RandomEffectsModel$set_group_parameters()’

         • ‘RandomEffectsModel$set_working_parameter_cov()’

         • ‘RandomEffectsModel$set_group_parameter_cov()’

         • ‘RandomEffectsModel$set_variance_prior_shape()’

         • ‘RandomEffectsModel$set_variance_prior_scale()’

  _M_e_t_h_o_d '_n_e_w()':

       Create a new RandomEffectsModel object.

    _U_s_a_g_e:

         RandomEffectsModel$new(num_components, num_groups)
         

    _A_r_g_u_m_e_n_t_s:

         ‘num_components’ Number of "components" or bases defining the
             random effects regression

         ‘num_groups’ Number of random effects groups


    _R_e_t_u_r_n_s:

         A new ‘RandomEffectsModel’ object.


  _M_e_t_h_o_d '_s_a_m_p_l_e__r_a_n_d_o_m__e_f_f_e_c_t()':

       Sample from random effects model.

    _U_s_a_g_e:

         RandomEffectsModel$sample_random_effect(
           rfx_dataset,
           residual,
           rfx_tracker,
           rfx_samples,
           global_variance,
           rng
         )
         

    _A_r_g_u_m_e_n_t_s:

         ‘rfx_dataset’ Object of type ‘RandomEffectsDataset’

         ‘residual’ Object of type ‘Outcome’

         ‘rfx_tracker’ Object of type ‘RandomEffectsTracker’

         ‘rfx_samples’ Object of type ‘RandomEffectSamples’

         ‘global_variance’ Scalar global variance parameter

         ‘rng’ Object of type ‘CppRNG’


    _R_e_t_u_r_n_s:

         None


  _M_e_t_h_o_d '_p_r_e_d_i_c_t()':

       Predict from (a single sample of a) random effects model.

    _U_s_a_g_e:

         RandomEffectsModel$predict(rfx_dataset, rfx_tracker)
         

    _A_r_g_u_m_e_n_t_s:

         ‘rfx_dataset’ Object of type ‘RandomEffectsDataset’

         ‘rfx_tracker’ Object of type ‘RandomEffectsTracker’


    _R_e_t_u_r_n_s:

         Vector of predictions with size matching number of
         observations in rfx_dataset


  _M_e_t_h_o_d '_s_e_t__w_o_r_k_i_n_g__p_a_r_a_m_e_t_e_r()':

       Set value for the "working parameter." This is typically used
       for initialization, but could also be used to interrupt or
       override the sampler.

    _U_s_a_g_e:

         RandomEffectsModel$set_working_parameter(value)
         

    _A_r_g_u_m_e_n_t_s:

         ‘value’ Parameter input


    _R_e_t_u_r_n_s:

         None


  _M_e_t_h_o_d '_s_e_t__g_r_o_u_p__p_a_r_a_m_e_t_e_r_s()':

       Set value for the "group parameters." This is typically used for
       initialization, but could also be used to interrupt or override
       the sampler.

    _U_s_a_g_e:

         RandomEffectsModel$set_group_parameters(value)
         

    _A_r_g_u_m_e_n_t_s:

         ‘value’ Parameter input


    _R_e_t_u_r_n_s:

         None


  _M_e_t_h_o_d '_s_e_t__w_o_r_k_i_n_g__p_a_r_a_m_e_t_e_r__c_o_v()':

       Set value for the working parameter covariance. This is
       typically used for initialization, but could also be used to
       interrupt or override the sampler.

    _U_s_a_g_e:

         RandomEffectsModel$set_working_parameter_cov(value)
         

    _A_r_g_u_m_e_n_t_s:

         ‘value’ Parameter input


    _R_e_t_u_r_n_s:

         None


  _M_e_t_h_o_d '_s_e_t__g_r_o_u_p__p_a_r_a_m_e_t_e_r__c_o_v()':

       Set value for the group parameter covariance. This is typically
       used for initialization, but could also be used to interrupt or
       override the sampler.

    _U_s_a_g_e:

         RandomEffectsModel$set_group_parameter_cov(value)
         

    _A_r_g_u_m_e_n_t_s:

         ‘value’ Parameter input


    _R_e_t_u_r_n_s:

         None


  _M_e_t_h_o_d '_s_e_t__v_a_r_i_a_n_c_e__p_r_i_o_r__s_h_a_p_e()':

       Set shape parameter for the group parameter variance prior.

    _U_s_a_g_e:

         RandomEffectsModel$set_variance_prior_shape(value)
         

    _A_r_g_u_m_e_n_t_s:

         ‘value’ Parameter input


    _R_e_t_u_r_n_s:

         None


  _M_e_t_h_o_d '_s_e_t__v_a_r_i_a_n_c_e__p_r_i_o_r__s_c_a_l_e()':

       Set shape parameter for the group parameter variance prior.

    _U_s_a_g_e:

         RandomEffectsModel$set_variance_prior_scale(value)
         

    _A_r_g_u_m_e_n_t_s:

         ‘value’ Parameter input


    _R_e_t_u_r_n_s:

         None


