#include <stdio.h>
#include <iostream>
#include <fstream>
#include <string>
#include <sstream>

using namespace std;

float read;
double output[3600];
string line;

ifstream in("input_data/data.csv");

int main()
{
  int i = 0;
    while(getline(in, line))
    {
      stringstream ss(line);
      string data;
      string::size_type string_size;
      while(getline(ss, data, ','))
        {
          output[i] = stod(data, &string_size);
          //output[i] ? i++ : i = i ;
          i++;
          //cout << output[i] << endl;
        }
    }
    for(int j = 0; j < 3600;  j++ )
      cout << output[j] << endl;
    return(0);
}
