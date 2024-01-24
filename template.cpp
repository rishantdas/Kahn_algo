// at have have have atmto find number of subarray thost k

#include<bits/stdc++.h>
using namespace std;

#define ll long long



// int subArray(vector<int>& nums, int k) {
//     int count = 0, ans = 0, start = 0, end = 0;
//     int n = nums.size();
//     while(end<n){
//         if(nums[end]%2==1){
//             count++;
//         }
//         while(count>k){
//             if(nums[start]%2==1){
//                 count--;
//             }
//             start++;
//         }
//         ans += end-start+1;
//         end++;
//     }
//     return ans;
// }

//*********************To find nCr of the numbers **********************
//  int nCr(int n, int r){
//     if(r == 0) return 1;
//     vector<int> v(r+1,0);
//     v[0] = 1;
//     for(int i=1; i<=n; i++){
//         for(int j=r; j>0; j--)
//             v[j] = ((v[j] % mod) + (v[j-1] % mod)) % mod;
//     }
//     return v[r];
// }

// **********To calculate the dp matrix of the number of palindromic substring and longest palinadrome string*************
//   string st=s.substr(0,1);
// vector<vector<int>>dp(s.size(),vector<int>(s.size(),-1));
// int n=s.size();
// if(n==1)return s;
//  vector<int>ans(2,0);
// int maxm=1;
//  for (int i = 0; i < n; i++) {
//         dp[i][i] = true;
//     }
// for(int i=0;i<n-1;i++){
//    if(s[i]==s[i+1]){

//        dp[i][i+1]=true;

//               ans[0]=i;
//               ans[1]=i+1;

//    }

// }

// for(int diff =2;diff<n;diff++){
//     for(int i=0;i<n-diff;i++){
//         int j=i+diff;
//         if(s[i]==s[j]&& dp[i+1][j-1]==true){
//             dp[i][j]=true;
//             if(j-i+1>maxm){
//                 maxm=j-i+1;
//               ans[0]=i;
//               ans[1]=j;
//             }
//         }
//     }
// }
// return s.substr(ans[0],ans[1]-ans[0]+1);
// ***********************seive algorithm and seivie array****************************
// vector<bool> sieve(1000001, true);
// int n = 1000000;
// void createSieve()
// {
//     for (int i = 2; i * i < n; i++)
//     {

//         if (sieve[i] == true)
//         {
//             for (int j = i * i; j <= n; j += i)
//             {
//                 sieve[j] = false;
//             }
//         }
//     }
// }
// *****************kahn algo********************************
// vector<vector<int>> g(n);
//         vector<int> ind(n,0);
//         queue<int> q;
//         vector<int> ans;
        
//         for(auto x:pre){
//             g[x[1]].push_back(x[0]);
//             ind[x[0]]++;
//         }
        
//         for(int i=0; i<n; i++){
//             if(ind[i] == 0) q.push(i);
//         }
        
//         while(!q.empty()){
//             int f = q.front();
//             q.pop();
//             ans.push_back(f);
//             for(auto x:g[f]){
//                 ind[x]--;
//                 if(ind[x] == 0) q.push(x);
//             }
//         }
        
//         if(ans.size()!=n) return {};
//         return ans;