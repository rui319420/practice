#include <stdio.h>
#include <windows.h>

int main(void)
{
  SetConsoleOutputCP(65001);
  int a;
  int b;
  int sum;

  printf("1つ目の数字を入力してください: ");
  scanf("%d", &a);

  printf("2つ目の数字を入力してください: ");
  scanf("%d", &b);

  sum = a + b;

  printf("合計は %d です！\n", sum);

  return 0;
}