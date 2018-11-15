#ifndef ACTIVATIONS_H
#define ACTIVATIONS_H

#define SIGMOID(x) (1.0f / (1 + exp(-x)))
#define TANH(x) (tanh(x))
#define RELU(x) (x > 0 ? x : 0)

/*
#ifdef TANH
    #define ACTIVATION_FUNCTION(output) (tanh(output))
#elif defined SCALEDTANH
    #define ACTIVATION_FUNCTION(output) (1.7159f * tanh(0.66667f * output))
#elif SIGMOID
    #define ACTIVATION_FUNCTION(output) (1.0f / (1 + exp(-output)))
#elif defined RELU
    #define ACTIVATION_FUNCTION(output) (output> 0 ? output : 0)
#elif defined ELU
    #define ACTIVATION_FUNCTION(output) (output> 0 ? output : exp(output) - 1)
#elif defined LINEAR
    #define ACTIVATION_FUNCTION(output) (output)
#endif
*/

#endif // ACTIVATIONS_H
