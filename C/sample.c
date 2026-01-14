#include <stdio.h>

int add(void);

int main(void)
{
  printf("%d\n", 10 + 3);
  add();
  return 0;
}

int add(void)
{
  printf("%d + %d = %d\n", 3, 5, 3 + 5);
  return 0;
}