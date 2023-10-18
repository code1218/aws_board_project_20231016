package com.korit.board.security;

import com.korit.board.service.PrincipalUserDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class PrincipalProvider implements AuthenticationProvider {

    private final PrincipalUserDetailsService principalUserDetailsService;
    private final BCryptPasswordEncoder passwordEncoder;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String email = authentication.getName();
        String password = (String) authentication.getCredentials();

        UserDetails principalUser = principalUserDetailsService.loadUserByUsername(email);

        if(!passwordEncoder.matches(password, principalUser.getPassword())) {
            throw new BadCredentialsException("BadCredentials");
        }

        return new UsernamePasswordAuthenticationToken(principalUser, password, principalUser.getAuthorities());
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}
