package com.example.bank_app;

public class AccountMapper {

	
	public static Account mapToAccount(AccountDto Ad) {
		Account account=new Account(Ad.getId(),Ad.getAccountHolderName(),Ad.getBalance());
		return account;
	}
	
	
	public static AccountDto mapToAccountDto(Account Ad) {
		AccountDto account=new AccountDto(Ad.getId(),Ad.getAccountHolderName(),Ad.getBalance());
		return account;
	}
}
