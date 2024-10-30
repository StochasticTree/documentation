_C_o_n_v_e_r_t _a _J_S_O_N _f_i_l_e _c_o_n_t_a_i_n_i_n_g _s_a_m_p_l_e _i_n_f_o_r_m_a_t_i_o_n _o_n _a _t_r_a_i_n_e_d _B_A_R_T
_m_o_d_e_l _t_o _a _B_A_R_T _m_o_d_e_l _o_b_j_e_c_t _w_h_i_c_h _c_a_n _b_e _u_s_e_d _f_o_r _p_r_e_d_i_c_t_i_o_n, _e_t_c...

_D_e_s_c_r_i_p_t_i_o_n:

     Convert a JSON file containing sample information on a trained
     BART model to a BART model object which can be used for
     prediction, etc...

_U_s_a_g_e:

     createBARTModelFromJsonFile(json_filename)
     
_A_r_g_u_m_e_n_t_s:

json_filename: String of filepath, must end in ".json"

_V_a_l_u_e:

     Object of type ‘bartmodel’

_E_x_a_m_p_l_e_s:

     n <- 100
     p <- 5
     X <- matrix(runif(n*p), ncol = p)
     f_XW <- (
         ((0 <= X[,1]) & (0.25 > X[,1])) * (-7.5) + 
         ((0.25 <= X[,1]) & (0.5 > X[,1])) * (-2.5) + 
         ((0.5 <= X[,1]) & (0.75 > X[,1])) * (2.5) + 
         ((0.75 <= X[,1]) & (1 > X[,1])) * (7.5)
     )
     noise_sd <- 1
     y <- f_XW + rnorm(n, 0, noise_sd)
     test_set_pct <- 0.2
     n_test <- round(test_set_pct*n)
     n_train <- n - n_test
     test_inds <- sort(sample(1:n, n_test, replace = FALSE))
     train_inds <- (1:n)[!((1:n) %in% test_inds)]
     X_test <- X[test_inds,]
     X_train <- X[train_inds,]
     y_test <- y[test_inds]
     y_train <- y[train_inds]
     bart_model <- bart(X_train = X_train, y_train = y_train)
     # saveBARTModelToJsonFile(bart_model, "test.json")
     # bart_model_roundtrip <- createBARTModelFromJsonFile("test.json")
     
