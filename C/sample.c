#include <stdio.h>

int add(void);
int sub(void);

int main(void)
{
  printf("%d\n", 10 + 3);
  add();
  sub();
  return 0;
}

int add(void)
{
  printf("%d + %d = %d\n", 3, 5, 3 + 5);
  return 0;
}

int sub(void)
{
  printf("%d - %d = %d\n", 7, 2, 7 - 2);
  return 0;
}