package com.greg.back.repository;
import java.util.Optional;

import com.greg.back.models.ERole;
import com.greg.back.models.Role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}