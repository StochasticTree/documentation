_C_o_n_v_e_r_t _t_h_e _p_e_r_s_i_s_t_e_n_t _a_s_p_e_c_t_s _o_f _a _B_A_R_T _m_o_d_e_l _t_o (_i_n-_m_e_m_o_r_y) _J_S_O_N

_D_e_s_c_r_i_p_t_i_o_n:

     Convert the persistent aspects of a BART model to (in-memory) JSON

_U_s_a_g_e:

     convertBARTModelToJson(object)
     
_A_r_g_u_m_e_n_t_s:

  object: Object of type ‘bartmodel’ containing draws of a BART model
          and associated sampling outputs.

_V_a_l_u_e:

     Object of type ‘CppJson’

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
     # bart_json <- convertBARTModelToJson(bart_model)
     
